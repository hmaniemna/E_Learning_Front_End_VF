import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DocService} from 'src/app/services/doc.service';
import {Course}from 'src/app/classes/course';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import {EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';

@Component({
  selector: 'app-classroom-teacher',
  templateUrl: './classroom-teacher.component.html',
  styleUrls: ['./classroom-teacher.component.scss']
})
export class ClassroomTeacherComponent implements OnInit {



  fileInfos?: Observable<any>;
  selectedFiles?: FileList;
id!:number ;
currentFile?: File;
progress = 0;
message = '';
course = new Course();
events!:Event[];
  constructor(private courseservice : CourseService , private eventService:EventService ,  private router: Router , private route: ActivatedRoute , private docservice : DocService) {
    this.fileInfos = this.docservice.getAlldoc();
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









