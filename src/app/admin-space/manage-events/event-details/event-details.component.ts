import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/classes/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  id!:number;
  event!:Event;

  constructor(private route:ActivatedRoute,private eventService:EventService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.event=new Event();
    this.eventService.getEventById(this.id).subscribe(data =>{
      this.event=data;
    })
  }

}