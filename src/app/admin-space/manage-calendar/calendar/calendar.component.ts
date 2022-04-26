import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TimeTableFilter } from 'src/app/pipe.filter';
import { TimeTableService } from 'src/app/services/time-table.service';
import { TimeTable } from 'src/app/classes/time-table';
import { Course } from 'src/app/classes/course';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  courses!:Course[];
  timetables!:TimeTable[];
  id!: number;
  isDataAvailable: boolean = false;
  constructor(private router:Router,private route: ActivatedRoute, private timeTableService: TimeTableService)
   { this.getTimeTables()}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isDataAvailable = true;
  }
//show the list of students
getTimeTables(){
  this.timeTableService.getTimeTableList().subscribe(data => {
    this.timetables=data;
  })
}

  // 1 student details
  groupTable(id:number){
    this.router.navigate(["view-Timetable",id]);
  }

  //this fct: if clicked btn update takes you to the form with the values
  updatetimeTable(id: number){
   this.router.navigate(["update-timeTable",id]);
  }

  deletetimeTable(id: number){
   this.timeTableService.deleteTimeTable(id).subscribe(data =>{
    console.log(data);
    this.getTimeTables();
   });
  }
  
  }

  
