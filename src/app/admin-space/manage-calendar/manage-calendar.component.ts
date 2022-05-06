import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from "daypilot-pro-angular";
import { DataService,EventMoveParams, EventCreateParams,EventDeleteParams } from 'src/app/services/data.service';


@Component({
  selector: 'app-manage-calendar',
  templateUrl: './manage-calendar.component.html',
  styleUrls: ['./manage-calendar.component.scss']
  //styleUrls: ['./scheduler-cal.component.scss']
})


export class ManageCalendarComponent implements AfterViewInit {

  constructor(private ds: DataService) {}
  
  @ViewChild("scheduler", {static: false})
  scheduler!: DayPilotSchedulerComponent;

  events: any;

  config: any = {
    timeHeaders : [
      {groupBy: "Month", format: "MMMM yyyy"},
      {groupBy: "Day", format: "d"}
    ],
    days: 7,
    startDate: "2022-09-01",
    scale: "Day",
    onTimeRangeSelected: (args) => {
      DayPilot.Modal.prompt("Text Event:", "").then(modal => {
        this.scheduler.control.clearSelection();
        if (!modal.result) {
          return;
        }
        console.log(args)
        
        let params: EventCreateParams = {
          start: args.start.toString(),
          end: args.end.toString(),
          text: modal.result,
          TimeIntervalId: args.resource
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