import { TeacherService } from './../services/teacher.service';
import { CourseService } from 'src/app/services/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../classes/course';
import { Teacher } from '../classes/teacher';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacherspace',
  templateUrl: './teacherspace.component.html',
  styleUrls: ['./teacherspace.component.scss'],
})
export class TeacherspaceComponent implements OnInit {
  //id: number = 0;

  //teacher = new Teacher();
  courses!: Course[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherservice: TeacherService,
    private courseservice: CourseService
  ) {
    this.getCourses();
  }

  //show the list of teachers

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.teacherservice.subscribe(data => {
    // this.teacher = data});
  }
  getCourses() {
    this.courseservice.getCourseList().subscribe((data) => {
      this.courses = data;
    });
  }

  GoToclassroom($myParam: string = ''): void {
    const navigationDetails: string[] = ['/classroom-teacher'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  gotoclassroom(idcourse: number) {
    this.router.navigate(['classroom-teacher', idcourse]);
  }
  GoToSudents($myParam: string = ''): void {
    const navigationDetails: string[] = ['/liststudents'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoTocalendrier($myParam: string = ''): void {
    const navigationDetails: string[] = ['/calendrier'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToexams($myParam: string = ''): void {
    const navigationDetails: string[] = ['/exams'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToaddexam($myParam: string = ''): void {
    const navigationDetails: string[] = ['/addexam'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToaddquiz($myParam: string = ''): void {
    const navigationDetails: string[] = ['/quiz'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToquiz($myParam: string = ''): void {
    const navigationDetails: string[] = ['/addquiz'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
