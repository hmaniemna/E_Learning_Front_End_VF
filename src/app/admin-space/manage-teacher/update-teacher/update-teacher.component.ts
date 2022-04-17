import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Teacher } from 'src/app/classes/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {

  id!:number;
  teacher:Teacher=new Teacher();

  //for the validation
createt= new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  levell: new FormControl(0,Validators.required),
  access: new FormControl(0,Validators.required),
  fullname: new FormControl('',Validators.required),
})

  constructor(private teacherService:TeacherService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //to fill the form with the teacher data by the getStudentById
    this.id=this.route.snapshot.params['id'];
    this.teacherService.getTeacherById(this.id).subscribe(data =>{
      this.teacher=data;
    },
    error=> console.log(error));
  }

    //for the validation to get the values from all fields
    get email(){return this.createt.get('email')}
    get password(){return this.createt.get('password')};
    get levell(){return this.createt.get('levell')};
    get access(){return this.createt.get('access')};
    get fullname(){return this.createt.get('fullname')};

    onSubmit(){
      this.teacherService.updateTeacher(this.id,this.teacher).subscribe(data =>{ 
        this.goToTeacherList();
      },
      error => console.log(error));
      
    }
    
    goToTeacherList(){
      this.router.navigate(['/manage-teacher']);
    }

}
