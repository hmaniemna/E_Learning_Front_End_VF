import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student'; 
import { Course} from 'src/app/classes/course';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService} from 'src/app/services/student.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-profile-s',
  templateUrl: './profile-s.component.html',
  styleUrls: ['./profile-s.component.scss']
})
export class ProfileSComponent implements OnInit {

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
