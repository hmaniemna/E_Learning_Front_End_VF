import { Component, OnInit } from '@angular/core';
import { Course} from '../classes/course';
import { Student } from 'src/app/classes/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CourseService } from '../services/course.service';
@Component({
  selector: 'app-student-space',
  templateUrl: './student-space.component.html',
  styleUrls: ['./student-space.component.scss']
})
export class StudentSpaceComponent implements OnInit {
  
  id:number = 0;
  student !: Student;
  courses!: Course[];

  constructor(private router: Router , private route: ActivatedRoute,private studentservice :StudentService , private courseservice:CourseService) {

   }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.studentservice.getStudentById(this.id).subscribe(data => {
    this.student = data;
    console.log(this.student);
    this.getStudentCourses();
    
  });
   
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
