import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EventService} from 'src/app/services/event.service';
import {Event} from 'src/app/classes/event';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events!:Event[];
  
  
  constructor(private router: Router,
   private eventService:EventService,
   private route:ActivatedRoute) 
   { this.getEvents();}

  ngOnInit(): void {
  }

  //show the list of groups
  getEvents(){
  return this.eventService.getEventList().subscribe(data =>{
    this.events=data;
  });
  }

  

  


//show one group 
  eventDetails(id:number){
    this.router.navigate(["event-details",id]);
  }

  //a btn when clicked takes to the space where is the form
  updateEvent(id: number){
    this.router.navigate(["update-event",id]);
   }

  //delete event
  deleteEvent(id: number){
    this.eventService.deleteEvent(id).subscribe(data =>{
     console.log(data);
     this.getEvents();
    });
  }

}
