import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TimeTableService } from 'src/app/services/time-table.service';

import { TimeTable } from 'src/app/classes/time-table';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';
import { TimeTableFilter } from 'src/app/pipe.filter';


@Component({
selector: 'app-manage-calendar',
 templateUrl: './manage-calendar.component.html',
 styleUrls: ['./manage-calendar.component.scss'],
 //pipes: [TimeTableFilter]
})


export class ManageCalendarComponent implements OnInit {

  course_id!: number;
  course = new Course();
  isDataAvailable: boolean = false;
  timeTableS!:TimeTable[];
  timetable=new TimeTable();
  searchText!:String;

 constructor(private router: Router,private _snackBar: MatSnackBar,private route: ActivatedRoute, private timeTableService: TimeTableService,private courseService: CourseService,
  private time:TimeTableFilter) { }

 ngOnInit(): void {
 //this.getCourses();
 this.getTimeTables();

 this.time.transform(this.timeTableS,this.searchText);
 }

   //show the list of tables
   getTimeTables(){
    return this.timeTableService.getTimeTableList().subscribe(data => {
      this.timeTableS = data;
      this.isDataAvailable = true;
    });
  }

  /*getCourses(){
    this.course_id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.course_id).subscribe(data => {
      this.course = data; 

    });
  }*/


 openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}

create() {
 this.courseService.getCourseById(this.course_id).subscribe(() => 
   this.router.navigate(['create-calendar'])
  );
}



update(entity_id: number) {
  this.router.navigate(['update-calendar', entity_id]);
}

delete(entity_id: number) {
  this.timeTableService.deleteTimeTable(entity_id).subscribe(() => {
    this.refresh();
    this.openSnackBar('Time table entity deleted', 'Ok');
  });
}

refresh(): void {
  window.location.reload();
}

    
}
