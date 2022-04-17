 //using activatedRoute we can get the id from the route

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

id!:number;
student!:Student;

  constructor(private studentService: StudentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.student=new Student();
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student=data;
    })
  }

}

