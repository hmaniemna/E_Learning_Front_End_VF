import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/classes/group';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrls: ['./liststudents.component.scss']
})
export class ListstudentsComponent implements OnInit {
  id: number = 0;
 students!:Student[];
  constructor( private router: Router , private route: ActivatedRoute , private studentservice : StudentService) {this.getStudents() ; }

  ngOnInit(): void {
  }
  getStudents(){
    this.id = this.route.snapshot.params['id'];
    this.studentservice.getstudentbyteacher(this.id).subscribe(data => {
      this.students = data});
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
