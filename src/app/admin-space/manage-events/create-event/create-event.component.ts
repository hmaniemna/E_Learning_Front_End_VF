import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {


  event:Event=new Event();

  //for the validation
  createEvent= new FormGroup({
    duration: new FormControl('',[Validators.required,Validators.maxLength(24)]),
   description: new FormControl('',[Validators.required,Validators.minLength(5)]),
   day: new FormControl('',[Validators.required,Validators.maxLength(31)]),
  year: new FormControl('',[Validators.required,Validators.maxLength(2023)]),
   month: new FormControl('',[Validators.required,Validators.maxLength(12)]),

  })


  constructor(private router:Router,
    private eventService:EventService) { }

  ngOnInit(): void {
  }

   //for the validation to get the values from all fields 
   get duration(){return this.createEvent.get('duration')};
   get description(){return this.createEvent.get('description')};
   get day(){return this.createEvent.get('day')}
   get month(){return this.createEvent.get('month')}
   get year(){return this.createEvent.get('year')}

   saveEvent(){
    this.eventService.createEvent(this.event).subscribe( data =>{
      console.log(data);
      this.goToEventList();
    },
    error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/manage-events']);
  }
  
  onSubmit(){
    console.log(this.event);
    this.saveEvent();
  }

}
