import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../classes/course';
import { Teacher } from '../classes/teacher';
import { TeacherService } from '../services/teacher.service';
@Component({
  selector: 'app-teacherspace',
  templateUrl: './teacherspace.component.html',
  styleUrls: ['./teacherspace.component.scss']
})
export class TeacherspaceComponent implements OnInit{
  teacher!:Teacher;
  courseInfos?: Observable<any>;
  constructor(private router: Router , private teacherservice : TeacherService) {
   this.courseInfos= this.teacherservice.getAllcourses(this.teacher.idT) ;
  }

  ngOnInit(): void {
  }

  GoTocourses($myParam: string = ''): void {
    const navigationDetails: string[] = ['/'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToSudents($myParam: string = ''): void {
    const navigationDetails: string[] = ['/liststudents'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoTocalendrier($myParam: string = ''): void {
    const navigationDetails: string[] = ['/calendrier'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToexams($myParam: string = ''): void {
    const navigationDetails: string[] = ['/exams'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToaddexam($myParam: string = ''): void {
    const navigationDetails: string[] = ['/addexam'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToaddquiz($myParam: string = ''): void {
    const navigationDetails: string[] = ['/quiz'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  GoToquiz($myParam: string = ''): void {
    const navigationDetails: string[] = ['/addquiz'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
