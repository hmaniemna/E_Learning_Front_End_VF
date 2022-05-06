import { Component, AfterViewInit,ViewChild } from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from "daypilot-pro-angular";
import { DataService,EventMoveParams, EventCreateParams,EventDeleteParams } from 'src/app/services/data.service';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/classes/course';
@Component({
  selector: 'app-manage-calendar',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `
<body>
    <!--== MAIN CONTRAINER ==-->
    <div class="container-fluid sb1">
        <div class="row">
            <!--== LOGO ==-->
            <div class="col-md-2 col-sm-3 col-xs-6 sb1-1">

             <!--  <a href="#" class="btn-close-menu"><i class="fa fa-times" aria-hidden="true"></i></a>
                <a href="#" class="atab-menu"><i class="fa fa-bars tab-menu" aria-hidden="true"></i></a> -->

                <a href="index-2.html" class=""><img src="assets/images/logo1.png" alt="" />
                </a>
            </div>
        </div>
    </div>

    <!--== BODY CONTNAINER ==-->
    <div class="container-fluid sb2 ">
        <div >
            <div class="sb2-1 ">
              <app-side-bar></app-side-bar>
            </div>
            <!--== BODY INNER CONTAINER ==-->
            <div class="sb2-2">
                <!--== breadcrumbs ==-->
                <div class="sb2-2-2">
                    <ul>
                        <li><a href="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
                        </li>
                        <li class="active-bre"><a href="#">View Calendar</a>
                        </li>
                        <li class="page-back"><a href="/home"><i class="fa fa-backward" aria-hidden="true"></i> Logout</a>
                        </li>
                    </ul>
                </div>
                <!--== DASHBOARD INFO ==-->
                <ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [eventSettings]='eventSettings'> </ejs-schedule>
            </div>
        </div>
    </div>

</body>

`,
 styles: [``],
//styleUrls: ['./scheduler-cal.component.scss']
 
})


export class ManageCalendarComponent  {

  courses!: Course[];
  constructor(private courseService :CourseService){};

  public data: object [] = [{
    id: 2,
    eventName: 'Meeting',
    startTime: new Date(2018, 1, 15, 10, 0),
    endTime: new Date(2018, 1, 15, 12, 30),
    isAllDay: false
      }];
      
      public selectedDate: Date = new Date(2018, 1, 15);
      public eventSettings: EventSettingsModel = {
        
    dataSource: this.data,
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    }
      };
     //show the list of groups
     getCourses(){
      return this.courseService.getCourseList().subscribe(data =>{
        this.courses=data;
      });
      }
    
}
