import { Component, OnInit } from '@angular/core';
import { Event} from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router'; 
@Component({
  selector: 'app-events-s',
  templateUrl: './events-s.component.html',
  styleUrls: ['./events-s.component.scss']
})
export class EventsSComponent implements OnInit {

  events !: Event[];

  constructor(private router: Router , private route: ActivatedRoute, private eventService :EventService) { }

  ngOnInit(): void {
    this.eventService.getEventList().subscribe(data => {
      this.events = data;
    })
  }

}
