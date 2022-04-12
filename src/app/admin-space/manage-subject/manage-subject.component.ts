
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.scss']
})
export class ManageSubjectComponent implements OnInit {


   subjects!:Course[];

  constructor(private router: Router,
   private subjectService:CourseService,
   private route:ActivatedRoute) 
   { this.getSubjects();}

  ngOnInit(): void {
  }

  //show the list of subjects
  getSubjects(){
  return this.subjectService.getCourseList().subscribe(data =>{
    this.subjects=data;
  });
  }

  //a btn when clicked takes to the space where is the form
  updateSubject(id: number){
    this.router.navigate(["update-subject",id]);
   }

  //delete subject
  deleteSubject(id: number){
    this.subjectService.deleteCourse(id).subscribe(data =>{
     console.log(data);
     this.getSubjects();
    });
  }


}
