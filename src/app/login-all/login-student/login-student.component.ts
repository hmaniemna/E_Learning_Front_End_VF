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

 public student:Student = new Student();

  constructor(private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
  }

 


  loginStudent(){
    console.log(this.student.email,this.student.password);
    console.log(this.student);
    //console.log(this.studentService.studentLogin(this.student.email,this.student.password));
    this.studentService.studentLogin(this.student.email,this.student.password).subscribe(data=> {
      this.student = data;
      alert("Login operation successful!")
      //to navigate to another page
      console.log(this.student);
      this.router.navigate(["/student-space/"+this.student.idS]);
    },
    error => alert("Error, Please retry!"))
  }

}
