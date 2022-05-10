import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../classes/todo';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { DialogsComponent } from '../dialogs/dialogs.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todo:Todo = new Todo();
  todos: Todo[] = [];

  constructor(private todoService: TodoService,private todoDialogRef: MatDialog, private http: HttpClient) {
    this.getTodos();
   }

  ngOnInit() {


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

}






