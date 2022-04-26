import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  id!:number;
  event:Event=new Event();

  //for the validation
  createEvent= new FormGroup({
    duration: new FormControl('',[Validators.required,Validators.maxLength(24)]),
   description: new FormControl('',[Validators.required,Validators.minLength(5)]),
   day: new FormControl('',[Validators.required,Validators.maxLength(31)]),
  year: new FormControl('',[Validators.required,Validators.maxLength(2023)]),
   month: new FormControl('',[Validators.required,Validators.maxLength(12)]),

  })

  constructor( private router:Router,
    private route:ActivatedRoute,
    private eventService:EventService) { }

  ngOnInit(): void {

    //to fill the form with the event data by the getGroupById
    this.id=this.route.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe(data =>{
      this.event=data;
    },
    error=> console.log(error));
  }

  //for the validation to get the values from all fields 
  get duration(){return this.createEvent.get('duration')};
  get description(){return this.createEvent.get('description')};
  get day(){return this.createEvent.get('day')}
  get month(){return this.createEvent.get('month')}
  get year(){return this.createEvent.get('year')}

  onSubmit(){
    this.eventService.updateEvent(this.id,this.event).subscribe(data =>{ 
      this.goToEventList();
    },
    error => console.log(error));
    
  }
  
  goToEventList(){
    this.router.navigate(['/manage-events']);
  }

}
