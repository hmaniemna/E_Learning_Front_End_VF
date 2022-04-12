

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent implements OnInit {

  subject:Course= new Course();

  //for the validation
  createSubject= new FormGroup({
    NameSub: new FormControl('',[Validators.required,Validators.minLength(1)]),
    yearS: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    teach: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  constructor(private router:Router,
    private subjectService:CourseService) { }

  ngOnInit(): void {
  }

  //for the validation to get the values from all fields 
  get NameSub(){return this.createSubject.get('NameSub')}
  get yearS(){return this.createSubject.get('yearS')}
  get teach(){return this.createSubject.get('teach')}
  
  saveSubject(){
    this.subjectService.createCourse(this.subject).subscribe( data =>{
      console.log(data);
      this.goToSubjectList();
    },
    error => console.log(error));
  }

  goToSubjectList(){
    this.router.navigate(['/manage-subject']);
  }
  
  onSubmit(){
    console.log(this.subject);
    this.saveSubject();
  }


}