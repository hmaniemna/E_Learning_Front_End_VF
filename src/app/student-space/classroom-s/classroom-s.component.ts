import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Course}from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';
import { StudentService} from 'src/app/services/student.service';
import { Student } from 'src/app/classes/student'; 

@Component({
  selector: 'app-classroom-s',
  templateUrl: './classroom-s.component.html',
  styleUrls: ['./classroom-s.component.scss']
})
export class ClassroomSComponent implements OnInit {


  id:number = 0;
  student !: Student;
  courses!: Course[];

  constructor(private router: Router , private route: ActivatedRoute,private studentservice :StudentService , private courseservice:CourseService) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.studentservice.getStudentById(this.id).subscribe(data => {
    this.student = data;
    console.log(this.student);
    this.getStudentCourses();
  });
   }

  ngOnInit(): void {
  }

  getStudentCourses (){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.courseservice.getCoursesByStudentId(this.id).subscribe(data => {
     this.courses = data;
     console.log(this.courses);
    });
  }

}
