
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.scss']
})
export class UpdateSubjectComponent implements OnInit {

  id!:number;
  subject:Course = new Course();

  //for the validation
  createSubject= new FormGroup({
    NameSub: new FormControl('',[Validators.required,Validators.minLength(1)]),
    yearS: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    teach: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  constructor(private router:Router,
    private route:ActivatedRoute,
    private subjectService:CourseService) { }

  ngOnInit(): void {

    //to fill the form with the subject data by the getSubjectById
    this.id=this.route.snapshot.params['id'];
    this.subjectService.getCourseById(this.id).subscribe(data =>{
      this.subject=data;
    },
    error=> console.log(error));
  }

  //for the validation to get the values from all fields 
  get NameSub(){return this.createSubject.get('NameSub')}
  get yearS(){return this.createSubject.get('yearS')}
  get teach(){return this.createSubject.get('teach')}

  onSubmit(){
    this.subjectService.updateCourse(this.id,this.subject).subscribe(data =>{ 
      this.goToGroupList();
    },
    error => console.log(error));
    
  }
  
  goToGroupList(){
    this.router.navigate(['/manage-subject']);
  }

}