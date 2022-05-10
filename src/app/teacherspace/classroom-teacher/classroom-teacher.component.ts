import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DocService} from 'src/app/services/doc.service';
import {Course}from 'src/app/classes/course';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import {EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/classes/todo';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { DialogsComponent } from 'src/app/dialogs/dialogs.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-classroom-teacher',
  templateUrl: './classroom-teacher.component.html',
  styleUrls: ['./classroom-teacher.component.scss']
})
export class ClassroomTeacherComponent implements OnInit {

  todo:Todo = new Todo();
  todos: Todo[] = [];

  fileInfos?: Observable<any>;
  selectedFiles?: FileList;
id!:number ;
currentFile?: File;
progress = 0;
message = '';
course = new Course();
events!:Event[];
  constructor(private todoService: TodoService,private todoDialogRef: MatDialog,private courseservice : CourseService , private eventService:EventService ,  private router: Router , private route: ActivatedRoute , private docservice : DocService,private http: HttpClient) {
    this.fileInfos = this.docservice.getAlldoc();
    this.getTodos();
    this.getEvents();}

selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.courseservice.getCourseById(this.id).subscribe(data =>{
      this.course=data;
    })
  }
  gotostudentlist(id : number){
    this.router.navigate(["liststudents" , id])
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos=data;
    })
  }
  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe(data =>{
     console.log(data);
     this.getTodos();
    });
   }
   onNewTodoClick(): void {
    let dialogRef = this.todoDialogRef.open(DialogsComponent, {
      data: {
        title: 'Create new Todo'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        if (result.title) {
          console.log("saving new todo");
          this.saveNewTodo(result);
        }
      }
    });
  }

  updateTodo(todo: Todo): void {

   this.todoService.updateTodo(todo).subscribe( data =>{
    console.log(data);
    this.getTodos();
   },
  error => console.log(error));

  }
saveNewTodo(todo:Todo){
  this.todoService.createTodo(todo).subscribe( data =>{
    console.log(data);
    this.getTodos();
  },
  error => console.log(error));
}
getCompletedTodos(): Todo[] {
  return this.todos.filter(todo => todo.completed);
}

todoCompleted(index: number, isComplete: boolean): void {
  let todo = this.todos[index];
  todo.completed = isComplete;
  this.updateTodo(todo);
}

  meetSupport(){
    location.href = "https://accounts.google.com/AccountChooser/signinchooser?continue=https://g.co/meet/Course";
 }
  //show the list of groups
  getEvents(){
    return this.eventService.getEventList().subscribe(data =>{
      this.events=data;
    });
    }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.docservice.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.docservice.getAlldoc();
            }


          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }
  this.selectedFiles = undefined;
    }
  }


}









