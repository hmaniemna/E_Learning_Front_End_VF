import { Component, OnInit } from '@angular/core';
import { CoursesComponent } from 'src/app/teacherspace/courses/courses.component';
import { Course } from 'src/app/classes/course';
import { StudentSpaceComponent } from '../student-space.component';
@Component({
  selector: 'app-dashboard-s',
  templateUrl: './dashboard-s.component.html',
  styleUrls: ['./dashboard-s.component.scss']
})
export class DashboardSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
