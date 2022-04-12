import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TimeTableService } from 'src/app/services/time-table.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { Group } from 'src/app/classes/group';
import { GroupService } from 'src/app/services/group.service';
import { TimeTable } from 'src/app/classes/time-table';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.scss']
})
export class CreateCalendarComponent implements OnInit {

  id!: number;
  timeTableEntity = new TimeTable();
  groups!:Group[]
  courses!:Course[];
  selectedOptionGroup: any = {};
  selectedOptionSubject: any = {};
  selectedOptionCourse: any = {};

  constructor(private router: Router, private route: ActivatedRoute,
    private timeTableService:TimeTableService,
    private courseService:CourseService,
    private groupService:GroupService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  reset() {
    this.timeTableEntity = new TimeTable();
    this.selectedOptionGroup = {};
  }

  onSubmit() {
    this.timeTableEntity.course.idCourse= this.id;
    this.timeTableEntity.group.idG= Number(this.selectedOptionGroup.idG);
    this.timeTableService.createTimeTable(this.timeTableEntity).subscribe(() => {
      this.reset();
      this.openSnackBar('Time table entity created.', 'Ok');
    }, error => {this.openSnackBar('Failed.', 'Ok');});
  }

  goBack() {
    this.router.navigate(['/manage-calendar']);
  }


}
