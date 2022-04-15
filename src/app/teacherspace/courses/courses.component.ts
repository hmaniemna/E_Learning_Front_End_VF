import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  Courses!:Course[];
  constructor(    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
