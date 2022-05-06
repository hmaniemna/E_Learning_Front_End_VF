import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from "daypilot-pro-angular";
import { DataService,EventMoveParams, EventCreateParams,EventDeleteParams } from 'src/app/services/data.service';

@Component({
  selector: 'app-scheduler-cal',
  template: `
  <div class="body">
    <h1>Scheduler</h1>
    <daypilot-scheduler [config]="config" [events]="events" #scheduler></daypilot-scheduler>
  </div>
  `,
   styles: [``],
  //styleUrls: ['./scheduler-cal.component.scss']
})
export class SchedulerCalComponent  implements AfterViewInit{

  constructor(private ds: DataService) {}
  
  @ViewChild("scheduler", {static: false})
  scheduler!: DayPilotSchedulerComponent;

  events: any;

  config: any = {
    timeHeaders : [
      //{groupBy: "Month", format: "MMMM yyyy"},
      {groupBy: "Day", format: "dddd"}
    ],
    days:7,
    startDate: "2019-10-01",
    scale: "Day",
    onTimeRangeSelected: args => {
      DayPilot.Modal.prompt("Text Event:", "").then(modal => {
        this.scheduler.control.clearSelection();
        if (!modal.result) {
          return;
        }
    
        let params: EventCreateParams = {
          start: args.start.toString(),
          end: args.end.toString(),
          text: modal.result,
          resource: args.resource
        };
        console.log(params);
        this.ds.createEvent(params).subscribe(result => {
          this.events.push(result);
          console.log(this.events);
          this.scheduler.control.message("Event created");
        } );

      });
    },
    treeEnabled: true,
    eventDeleteHandling: "Update",
  }
  

  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.resources = result);
    
    var from = this.scheduler.control.visibleStart();
    var to = this.scheduler.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => this.events = result);

  }


}
