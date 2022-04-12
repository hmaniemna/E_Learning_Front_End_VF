import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TimeTableFilter } from 'src/app/pipe.filter';
import { TimeTableService } from 'src/app/services/time-table.service';
import { TimeTable } from 'src/app/classes/time-table';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  id!: number;
  isDataAvailable: boolean = false;
  //timetable!: TimeTable[];
   timetable!:any[];
  constructor(private route: ActivatedRoute, private timeTableService: TimeTableService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isDataAvailable = true;
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
   };
  }

  
