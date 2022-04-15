import { Exam } from 'src/app/classes/exam';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ExamService } from 'src/app/services/exam.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.scss']
})
export class AddexamComponent implements OnInit {
exam: Exam= new Exam();
selectedFiles?: FileList;
currentFile?: File;
progress = 0;
message = '';

fileInfos?: Observable<any>;


     //for the validation
     createt= new FormGroup({


    testname: new FormControl('',Validators.required),
     // start_date: new FormControl(0,Validators.required),
      //duration: new FormControl(0,Validators.required),
       doc: new FormControl('',Validators.required),

    })
  constructor(private router: Router , private examservice: ExamService) { }

  ngOnInit(): void {
    this.fileInfos = this.examservice.getAlltests();
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
   //for the validation to get the values from all fields
  // get testname(){return this.createt.get('testname')}
  // get start_date()){return this.createt.get('start_date')};
  // get duration(){return this.createt.get('duration')};
  // get doc(){return this.createt.get('doc')};

  GoToexams($myParam: string = ''): void {
    const navigationDetails: string[] = ['/exams'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  GoToTeacherspace($myParam: string = ''): void {
    const navigationDetails: string[] = ['/teacherspace'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToSudents($myParam: string = ''): void {
    const navigationDetails: string[] = ['/liststudents'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoTocalendrier($myParam: string = ''): void {
    const navigationDetails: string[] = ['/calendrier'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }


    // define a function to upload files
    upload(): void {
      this.progress = 0;

      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);

        if (file) {
          this.currentFile = file;

          this.examservice.upload(this.currentFile).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.examservice.getAlltests();
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


     // define a function to download files




         
/** 

  saveTest(){
    this.examservice.createTest(this.exam).subscribe( data =>{
      console.log(data);
      this.GoToexams();
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.exam);
    this.saveTest();
  }
  **/






}

