import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Teacher } from 'src/app/classes/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher= new Teacher();

   //for the validation
   createt= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
    levell: new FormControl(0,Validators.required),
    access: new FormControl(0,Validators.required),
    fullname: new FormControl('',Validators.required),
  })

  constructor( private teacherService:TeacherService,
    private router:Router) { }

  ngOnInit(): void {
  }

  //for the validation to get the values from all fields 
  get email(){return this.createt.get('email')}
  get password(){return this.createt.get('password')};
  get levell(){return this.createt.get('levell')};
  get access(){return this.createt.get('access')};
  get fullname(){return this.createt.get('fullname')};

  saveTeacher(){
    this.teacherService.createTeacher(this.teacher).subscribe( data =>{
      console.log(data);
      this.goToTeacherList();
    },
    error => console.log(error));
  }

  goToTeacherList(){
    this.router.navigate(['/manage-teacher']);
  }
  
  onSubmit(){
    console.log(this.teacher);
    this.saveTeacher();
  }

}
