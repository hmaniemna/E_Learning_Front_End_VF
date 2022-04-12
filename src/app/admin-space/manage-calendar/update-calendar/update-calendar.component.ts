import { Component, OnInit } from '@angular/core';
import { GroupedObservable, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { TimeTableService } from 'src/app/services/time-table.service';
import { TimeTable } from 'src/app/classes/time-table';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';
import { Group } from 'src/app/classes/group';
import { GroupService } from 'src/app/services/group.service';
import{TimeTableChange } from 'src/app/change/TimeTableChange';

@Component({
  selector: 'app-update-calendar',
  templateUrl: './update-calendar.component.html',
  styleUrls: ['./update-calendar.component.scss']
})
export class UpdateCalendarComponent implements OnInit {

  id!: number;
  isDataAvailable: boolean = false;
  selectedOptionCourse: any = {};
  selectedOptionGroup: any = {};
  groupC:any = {};
  group_id:any={};
  groups!:Group[];
  courses!:Course[];
  course=new Course();
  course_id!: number;
  timeTable = new TimeTable();
  change=new TimeTableChange();

  constructor(private router: Router, private route: ActivatedRoute,
    private timeTableService:TimeTableService,
    private courseService:CourseService,
    private groupService:GroupService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isDataAvailable = true;
    this.getCourses();
    this.getGroup();
  }

 

  getCourses(){
    this.course_id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.course_id).subscribe(data => {
      this.course = data; 

    });
  }

  getGroup(){
    this.groupC=this.route.snapshot.params['id'];
    this.groupService.getGroupById(this.group_id).subscribe(data => {
      this.groupC = data;
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  isDataChanged() {
    if(!this.change.course_id
      || !this.change.day
      || !this.change.group_id
      || !this.change.lessonNumber) return true;
      return false;
  }

  onSubmit() {
    if(this.isDataChanged()) {
      this.change.course_id = this.timeTable.course.idCourse;
      this.change.group_id = this.selectedOptionGroup.id;
      if(!this.change.day) this.change.day = this.timeTable.day;
      if(!this.change.lessonNumber) this.change.lessonNumber = this.timeTable.lessonNumber;
      this.timeTableService.updateTimeTable(this.id, this.change).subscribe(() => {
        this.refresh();
        this.openSnackBar('Time table entity updated', 'Ok');
      });
    }
  }

  refresh() {
    this.change = new TimeTableChange();
    this.timeTable = new TimeTable();
    this.selectedOptionGroup = {};
  }

  goBack() {
    this.router.navigate(['/manage-calendar']);
  }


}
