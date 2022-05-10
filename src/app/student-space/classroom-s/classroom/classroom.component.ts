import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DocService} from 'src/app/services/doc.service';
import {Course}from 'src/app/classes/course';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { NgForm } from '@angular/forms';
import { WebSocketService } from 'src/app/services/web-socket.service';
import {  OnDestroy } from '@angular/core';
import { ChatMessageDto } from 'src/app/classes/chatMessageDto';
import { Byte } from '@angular/compiler/src/util';
import {FileService} from 'src/app/services/file.service';
import * as fileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import {WorkSService} from 'src/app/services/work-s.service';
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

WorkSInfos?:Observable<any>;
DocInfos?:Observable<any>;
fileInfos?: Observable<any>;
selectedFiles?: FileList;
id!:number ;
currentFile?: File;
progress = 0;
message = '';
course = new Course();
doc!:DocParam;


  constructor(private courseservice : CourseService,  private router: Router ,
     private route: ActivatedRoute , private docservice : DocService,
     public webSocketService: WebSocketService, private workSService:WorkSService,
    private fileService : FileService) {
      // get all the docs(courses)from the DB
      this.DocInfos=this.docservice.getAlldoc();
      //get all the files(tests) from the DB
      this.fileInfos = this.fileService.getAllFiles();
        //get all the files(tests) from the DB
        this.WorkSInfos = this.workSService.getAllWorkS();
   
      //get my classroom by id in url 
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.courseservice.getCourseById(this.id).subscribe(data => {
    this.course = data; 
  });
  
  }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  //open the meet link
  meetSupport(){
    location.href = "https://accounts.google.com/AccountChooser/signinchooser?continue=https://g.co/meet/Course";
  }
  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.workSService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.WorkSInfos = this.workSService.getAllWorkS();
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

  ngOnDestroy(): void {
    this.webSocketService.openWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  }
  DownloadDoc(id:number){
    return this.docservice.downloaddoc(id)
    .subscribe(response => 
      {
        let blob:any = new Blob([response], { type: "text/json; charset=utf-8" });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			saveAs(blob, 'employees.json');

      }),error => console.log('Error downloading the file')
,()=> console.info('File download successfully');
  }

}

export interface DocParam {
  name: string;
  type: string;
  data: Byte[];
}
