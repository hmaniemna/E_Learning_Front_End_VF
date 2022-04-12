import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/classes/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.scss']
})
export class ManageTeacherComponent implements OnInit {

 teachers!:Teacher[];

  constructor(private teacherService:TeacherService,
    private router:Router,
    private route:ActivatedRoute) { this.getTeachers();  }

  ngOnInit(): void {
  }


  //show the list of teachers
  getTeachers(){
    this.teacherService.getTeacherList().subscribe(data => {
      this.teachers=data;
    })
  }

    // 1 student details
    teacherDetails(idT:number){
      this.router.navigate(["teacher-details",idT]);
    }
  
    //this fct: if clicked btn update takes you to the form with the values
    updateTeacher(idT: number){
     this.router.navigate(["update-teacher",idT]);
    }
  
    deleteTeacher(id: number){
     this.teacherService.deleteTeacher(id).subscribe(data =>{
      console.log(data);
      this.getTeachers();
     });
    }
}


//<!-- shift + alt+ f      (prettier)-->
