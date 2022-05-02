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


  @ViewChild("scheduler", {static: false})
  scheduler!: DayPilotSchedulerComponent;

  events: any;

  config: any = {
    timeHeaders : [
      {groupBy: "Month", format: "MMMM yyyy"},
      {groupBy: "Day", format: "d"}
    ],
    days: 31,
    startDate: "2019-10-01",
    scale: "Day",
    treeEnabled: true,
    eventDeleteHandling: "Update",
    onEventDelete: (args: { e: { id: () => any; }; }) => {
      let params: EventDeleteParams = {
        id: args.e.id(),
      };
      this.ds.deleteEvent(params).subscribe(result => {
        this.scheduler.control.message("Event deleted");
      });

    },
    onTimeRangeSelected: (args: { start: { toString: () => any; }; end: { toString: () => any; }; resource: any; }) => {
      DayPilot.Modal.prompt("New event name:", "Event").then(modal => {
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
        this.ds.createEvent(params).subscribe(result => {
          this.events.push(result);
          this.scheduler.control.message("Event created");
        } );

      });
    },
    onEventMove: (args: { e: { id: () => any; }; newStart: { toString: () => any; }; newEnd: { toString: () => any; }; newResource: any; }) => {
      let params: EventMoveParams = {
        id: args.e.id(),
        start: args.newStart.toString(),
        end: args.newEnd.toString(),
        resource: args.newResource
      };
      this.ds.moveEvent(params).subscribe(result => {
        this.scheduler.control.message("Event moved");
      });
    }
  };

  constructor(private ds: DataService) {}

  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.resources = result);

    var from = this.scheduler.control.visibleStart();
    var to = this.scheduler.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => this.events = result);

  }


}
