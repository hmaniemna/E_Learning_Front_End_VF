import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../classes/teacher';
import {TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss']
})
export class LoginTeacherComponent implements OnInit {

  teacher:Teacher = new Teacher;
  constructor(private teacherservice:TeacherService , private router:Router) {

  }

  ngOnInit(): void {
  }

  loginteacher(){
    console.log(this.teacher.emailId,this.teacher.password);
    this.teacherservice.teacherLogin(this.teacher.emailId,this.teacher.password).subscribe(data=> {
      alert("Login operation successful!")
      //to navigate to another page
      this.gototeacherspace(this.teacher.idT);

    },
    error => alert("Error, Please retry!"));  }

  gototeacherspace(id : number){
  this.router.navigate(["/teacherspace/"+id]);
  }

}
