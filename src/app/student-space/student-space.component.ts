import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student';
import { LoginStudentComponent } from 'src/app/login-all/login-student/login-student.component'; 
@Component({
  selector: 'app-student-space',
  templateUrl: './student-space.component.html',
  styleUrls: ['./student-space.component.scss']
})
export class StudentSpaceComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

}
