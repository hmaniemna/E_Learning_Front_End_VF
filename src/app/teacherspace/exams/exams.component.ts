import { ExamService } from './../../services/exam.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/classes/exam';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  fileInfos?: Observable<any>;
  constructor(private router: Router , private examservice: ExamService) {
    this.fileInfos = this.examservice.getAlltests();
  }

  ngOnInit(): void {

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



deletetest(id: number){
    this.examservice.deletetest(id).subscribe(data =>{
     console.log(data);
     this.examservice.getAlltests();
    });
   }
   downloadtest(id : number){
     this.examservice.downloadtest(id).subscribe(data =>{
      console.log(data);
     });
   }




}
