import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/classes/group';
import { Student } from 'src/app/classes/student';
@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrls: ['./liststudents.component.scss']
})
export class ListstudentsComponent implements OnInit {
 group!:Group[];
  constructor(private router: Router) { }

  ngOnInit(): void {
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
  GoToteacherspace($myParam: string = ''): void {
    const navigationDetails: string[] = ['/teacherspace'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

}
