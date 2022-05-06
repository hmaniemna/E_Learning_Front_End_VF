import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgWhiteboardModule } from 'ng-whiteboard';
import { DataService } from './services/data.service';
import { TeacherspaceComponent } from './teacherspace/teacherspace.component';
//--------------------------
//This is the importation in the last project


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {DayPilotModule} from "daypilot-pro-angular";
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
// component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterHComponent } from './home/footer-h/footer-h.component';
import { HeaderHComponent } from './home/header-h/header-h.component';

//Login Component
import { LoginAdminComponent } from './login-all/login-admin/login-admin.component';
import { LoginStudentComponent } from './login-all/login-student/login-student.component';
import { LoginTeacherComponent } from './login-all/login-teacher/login-teacher.component';

//AdminSpace Component
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { ManageTeacherComponent } from './admin-space/manage-teacher/manage-teacher.component';
import { ManageSubjectComponent } from './admin-space/manage-subject/manage-subject.component';
import { ManageCalendarComponent } from './admin-space/manage-calendar/manage-calendar.component';
import { ManageStudentComponent } from './admin-space/manage-student/manage-student.component';
import { SectionsComponent } from './home/sections/sections.component';
import { SideBarComponent } from './admin-space/side-bar/side-bar.component';
import { CalendarComponent } from './admin-space/manage-calendar/calendar/calendar.component';
import { UpdateStudentComponent } from './admin-space/manage-student/update-student/update-student.component';
import { StudentDetailsComponent } from './admin-space/manage-student/student-details/student-details.component';
import { CreateStudentComponent } from './admin-space/manage-student/create-student/create-student.component';
import { ManageGroupComponent } from './admin-space/manage-group/manage-group.component';
import { CreateGroupComponent } from './admin-space/manage-group/create-group/create-group.component';
import { UpdateGroupComponent } from './admin-space/manage-group/update-group/update-group.component';
import { DetailsGroupComponent } from './admin-space/manage-group/details-group/details-group.component';
import { UpdateTeacherComponent } from './admin-space/manage-teacher/update-teacher/update-teacher.component';
import { CreateTeacherComponent } from './admin-space/manage-teacher/create-teacher/create-teacher.component';
import { TeacherDetailsComponent } from './admin-space/manage-teacher/teacher-details/teacher-details.component';
import { CreateSubjectComponent } from './admin-space/manage-subject/create-subject/create-subject.component';
import { UpdateSubjectComponent } from './admin-space/manage-subject/update-subject/update-subject.component';
import { ManageAdminAccountComponent } from './admin-space/manage-admin-account/manage-admin-account.component';
import { UpdateAccountComponent } from './admin-space/manage-admin-account/update-account/update-account.component';
import { ManageEventsComponent } from './admin-space/manage-events/manage-events.component';
import { EventDetailsComponent } from './admin-space/manage-events/event-details/event-details.component';
import { UpdateEventComponent } from './admin-space/manage-events/update-event/update-event.component';
import { CreateEventComponent } from './admin-space/manage-events/create-event/create-event.component';
import { ManageNotesComponent } from './admin-space/manage-notes/manage-notes.component';
import { SchedulerCalComponent } from './admin-space/scheduler/scheduler-cal/scheduler-cal.component';

//Student Space Component
import { StudentSpaceComponent } from './student-space/student-space.component';
import {SideBarSComponent} from './student-space/side-bar-s/side-bar-s.component';
import {DashboardSComponent} from './student-space/dashboard-s/dashboard-s.component';
import {ProfileSComponent} from './student-space/profile-s/profile-s.component';
import {EventsSComponent} from './student-space/events-s/events-s.component';
import {TestsSComponent}from './student-space/tests-s/tests-s.component';
import {TimeLineSComponent} from './student-space/time-line-s/time-line-s.component';
import { CalendarSComponent} from './student-space/calendar-s/calendar-s.component';
import {ArticlesSComponent} from './student-space/articles-s/articles-s.component';
import {ClassroomSComponent} from './student-space/classroom-s/classroom-s.component';

//Teacher Space Component
import { SidebarteacherComponent } from './teacherspace/sidebarteacher/sidebarteacher.component';
import { AddexamComponent } from './teacherspace/exams/addexam/addexam.component';
import { ExamsComponent } from './teacherspace/exams/exams.component';
import { ClassroomTeacherComponent } from './teacherspace/classroom-teacher/classroom-teacher.component';
import { ChatComponent } from './chat/chat.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    SchedulerCalComponent,
    AppComponent,
    HomeComponent,
    AdminSpaceComponent,
    ManageTeacherComponent,
    ManageSubjectComponent,
    ManageCalendarComponent,
    ManageStudentComponent,
    StudentSpaceComponent,
    LoginAdminComponent,
    LoginStudentComponent,
    FooterHComponent,
    HeaderHComponent,
    SectionsComponent,
    SideBarComponent,
    CalendarComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    CreateStudentComponent,
    ManageGroupComponent,
    CreateGroupComponent,
    UpdateGroupComponent,
    DetailsGroupComponent,
    UpdateTeacherComponent,
    CreateTeacherComponent,
    TeacherDetailsComponent,
    LoginTeacherComponent,
    SidebarteacherComponent,
    AddexamComponent,
    ExamsComponent,
    CreateSubjectComponent,
    UpdateSubjectComponent,
    ManageAdminAccountComponent,
    UpdateAccountComponent,
    ManageEventsComponent,
    EventDetailsComponent,
    UpdateEventComponent,
    CreateEventComponent,
    ManageNotesComponent,
    SideBarSComponent,
    DashboardSComponent,
    ProfileSComponent,
    TestsSComponent,
    CalendarSComponent,
    ArticlesSComponent,
    EventsSComponent,
    TimeLineSComponent,
    ClassroomSComponent,
    TeacherspaceComponent,
    CreateSubjectComponent,
    UpdateSubjectComponent,
    ClassroomTeacherComponent,
    ChatComponent,
    EventsComponent,
    EventComponent

  ],

  imports: [
    DayPilotModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule,
    MatCardModule,
    NgWhiteboardModule,
    ScheduleModule,
],
  providers: [DataService
],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    HomeComponent
    ],



})
export class AppModule { }