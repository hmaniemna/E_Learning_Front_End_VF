import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {

  id:number =0;
  student !: Student;


    //for the validation
    createStudent= new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      LastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3)]),
    })

  constructor(private router: Router , private route: ActivatedRoute , private studentService : StudentService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student=data;
    },
    error=> console.log(error));
  }

   //for the validation to get the values from all fields 
   get firstName(){return this.createStudent.get('firstName')}
   get lastName(){return this.createStudent.get('lastName')}
   get password(){return this.createStudent.get('password')}

  onSubmit(){
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{ 
      this.router.navigate(["/student-profile/"+this.student.idS]);
    },
    error => console.log(error));
    
  }

}
