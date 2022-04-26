import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../classes/teacher";
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss']
})
export class LoginTeacherComponent implements OnInit {

  teacher:Teacher=new Teacher();

  constructor(private router: Router,
    private teacherService:TeacherService) { }

  ngOnInit(): void {
  }

  loginTeacher(){
    console.log(this.teacher);
    this.teacherService.teacherLogin(this.teacher.emailId).subscribe(data=> {
      alert("Login operation successful!");
      this.goToTeacherSpace();
    },
    error => alert("Error, Please retry!"));
  }


  goToTeacherSpace(){
    this.router.navigate(['/teacherspace']);
  }

}
