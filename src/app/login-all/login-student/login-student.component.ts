import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent implements OnInit {

student:Student = new Student();

  constructor(private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
  }

 


  loginStudent(){
    console.log(this.student.emailId,this.student.password);
    this.studentService.studentLogin(this.student.emailId,this.student.password).subscribe(data=> {
      alert("Login operation successful!")
      //to navigate to another page
      this.router.navigate(['/student-space']);
    },
    error => alert("Error, Please retry!"));
  }
}
