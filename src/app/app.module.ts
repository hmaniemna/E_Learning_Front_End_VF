import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TeacherspaceComponent } from './teacherspace/teacherspace.component';
//--------------------------
//This is the importation in the last project


/**import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';*/

//-----------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { ManageClassroomComponent } from './admin-space/manage-classroom/manage-classroom.component';
import { ManageTeacherComponent } from './admin-space/manage-teacher/manage-teacher.component';
import { ManageSubjectComponent } from './admin-space/manage-subject/manage-subject.component';
import { ManageCalendarComponent } from './admin-space/manage-calendar/manage-calendar.component';
import { ManageStudentComponent } from './admin-space/manage-student/manage-student.component';






import { StudentSpaceComponent } from './student-space/student-space.component';
import { LoginAdminComponent } from './login-all/login-admin/login-admin.component';
import { LoginStudentComponent } from './login-all/login-student/login-student.component';
import { FooterHComponent } from './home/footer-h/footer-h.component';
import { HeaderHComponent } from './home/header-h/header-h.component';
import { SectionsComponent } from './home/sections/sections.component';
import { SideBarComponent } from './admin-space/side-bar/side-bar.component';
import { CalendarComponent } from './admin-space/manage-calendar/calendar/calendar.component';
import { UpdateStudentComponent } from './admin-space/manage-student/update-student/update-student.component';
import { StudentDetailsComponent } from './admin-space/manage-student/student-details/student-details.component';
import { CreateStudentComponent } from './admin-space/manage-student/create-student/create-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ManageGroupComponent } from './admin-space/manage-group/manage-group.component';
import { CreateGroupComponent } from './admin-space/manage-group/create-group/create-group.component';
import { UpdateGroupComponent } from './admin-space/manage-group/update-group/update-group.component';
import { DetailsGroupComponent } from './admin-space/manage-group/details-group/details-group.component';
import { UpdateTeacherComponent } from './admin-space/manage-teacher/update-teacher/update-teacher.component';
import { CreateTeacherComponent } from './admin-space/manage-teacher/create-teacher/create-teacher.component';
import { TeacherDetailsComponent } from './admin-space/manage-teacher/teacher-details/teacher-details.component';
import { LoginTeacherComponent } from './login-all/login-teacher/login-teacher.component';
import { CreateSubjectComponent } from './admin-space/manage-subject/create-subject/create-subject.component';
import { UpdateSubjectComponent } from './admin-space/manage-subject/update-subject/update-subject.component';
import { TimeTableFilter } from './pipe.filter';
import { CreateCalendarComponent } from './admin-space/manage-calendar/create-calendar/create-calendar.component';
import { UpdateCalendarComponent } from './admin-space/manage-calendar/update-calendar/update-calendar.component';
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
    AppComponent,
    HomeComponent,
    AdminSpaceComponent,
    ManageClassroomComponent,
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
TeacherspaceComponent,


    CreateSubjectComponent,
    UpdateSubjectComponent,
    TimeTableFilter,
    CreateCalendarComponent,
    UpdateCalendarComponent,

    ClassroomTeacherComponent,
      ChatComponent,
      EventsComponent,
      EventComponent
  ],

  imports: [

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

    //OLD CODE MABY WILL BE NEEDED

   /* MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatCarouselModule,
    MDBBootstrapModule,
    ToastrModule,
    MatDialogModule,
    MatSidenavModule*/





  ],
  providers: [TimeTableFilter,],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    HomeComponent
    ],



})
export class AppModule { }
