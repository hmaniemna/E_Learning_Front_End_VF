import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from 'src/app/classes/exam';
import { ExamService } from 'src/app/services/exam.service';
import { ActivatedRoute } from '@angular/router';
import {FileService} from 'src/app/services/file.service'

@Component({
  selector: 'app-tests-s',
  templateUrl: './tests-s.component.html',
  styleUrls: ['./tests-s.component.scss']
})
export class TestsSComponent implements OnInit {

  fileInfos?: Observable<any>;
  exams!:Exam[];
  

  constructor(private router:Router,private examService: ExamService,
    route: ActivatedRoute, private fileService : FileService) { 
         //get all the docs(courses) from the DB
         this.fileInfos = this.fileService.getAllFiles();
         this.getStudents();
  }

  ngOnInit(): void {
  }
  
  //show the list of students
  getStudents(){
    //this.examService.getExamList().subscribe(data => {
     // this.exams=data;
    //})
  }

    // 1 student details
    studentDetails(idS:number){
      this.router.navigate(["student-details",idS]);
    }
  
    //this fct: if clicked btn update takes you to the form with the values
    updateStudent(idS: number){
     this.router.navigate(["update-student",idS]);
    }
  
    deleteStudent(id: number){
     //this.studentService.deleteStudent(id).subscribe(data =>{
      //console.log(data);
      //this.getStudents();
    // });
    }


}
