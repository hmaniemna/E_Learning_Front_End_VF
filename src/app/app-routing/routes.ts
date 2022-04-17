import { SidebarteacherComponent } from './../teacherspace/sidebarteacher/sidebarteacher.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AdminSpaceComponent } from '../admin-space/admin-space.component';
import { LoginStudentComponent } from '../login-all/login-student/login-student.component';
import { LoginAdminComponent } from '../login-all/login-admin/login-admin.component';
import { ManageCalendarComponent } from '../admin-space/manage-calendar/manage-calendar.component';
import { SectionsComponent } from '../home/sections/sections.component';
import { CalendarComponent } from '../admin-space/manage-calendar/calendar/calendar.component';
import { ManageStudentComponent } from '../admin-space/manage-student/manage-student.component';
import { ManageTeacherComponent } from '../admin-space/manage-teacher/manage-teacher.component';
import { CreateStudentComponent } from '../admin-space/manage-student/create-student/create-student.component';
import {UpdateStudentComponent} from '../admin-space/manage-student/update-student/update-student.component';
import {StudentDetailsComponent} from '../admin-space/manage-student/student-details/student-details.component';
import { ManageGroupComponent } from '../admin-space/manage-group/manage-group.component';
import { CreateGroupComponent } from '../admin-space/manage-group/create-group/create-group.component';
import { UpdateGroupComponent } from '../admin-space/manage-group/update-group/update-group.component';
import { DetailsGroupComponent } from '../admin-space/manage-group/details-group/details-group.component';
import { TeacherspaceComponent } from '../teacherspace/teacherspace.component';
import { CreateTeacherComponent } from '../admin-space/manage-teacher/create-teacher/create-teacher.component';
import { TeacherDetailsComponent } from '../admin-space/manage-teacher/teacher-details/teacher-details.component';
import { UpdateTeacherComponent } from '../admin-space/manage-teacher/update-teacher/update-teacher.component';
import { AddexamComponent } from '../teacherspace/exams/addexam/addexam.component';
import { ExamsComponent } from '../teacherspace/exams/exams.component';
import { LoginTeacherComponent } from '../login-all/login-teacher/login-teacher.component';
import { ManageSubjectComponent } from '../admin-space/manage-subject/manage-subject.component';
import { CreateSubjectComponent } from '../admin-space/manage-subject/create-subject/create-subject.component';
import { UpdateSubjectComponent } from '../admin-space/manage-subject/update-subject/update-subject.component';
import { CreateCalendarComponent } from '../admin-space/manage-calendar/create-calendar/create-calendar.component';
import { UpdateCalendarComponent } from '../admin-space/manage-calendar/update-calendar/update-calendar.component';


export const routes: Routes = [

    { path: '', redirectTo: '/teacherspace', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    {path: 'sections',  component: SectionsComponent },

    {path: 'admin-space',  component: AdminSpaceComponent},
    { path: 'login-admin',  component: LoginAdminComponent },

    //all the paths related to the admin-space
    {path: 'manage-calendar',  component: ManageCalendarComponent},
    {path: 'calendar',  component: CalendarComponent },
    {path: 'create-calendar', component:CreateCalendarComponent},
    {path: 'update-calendar', component:UpdateCalendarComponent},

    {path:'login-teacher', component:LoginTeacherComponent},
    {path: 'manage-teacher',  component: ManageTeacherComponent },
    {path: 'create-teacher', component:CreateTeacherComponent},
    {path: 'update-teacher/:id', component:UpdateTeacherComponent},
    {path: 'teacher-details/:id', component:TeacherDetailsComponent},

    { path: 'login-student',  component: LoginStudentComponent },
    {path: 'manage-student',  component: ManageStudentComponent },
    {path: 'create-student',  component: CreateStudentComponent },
    {path: 'update-student/:id',  component: UpdateStudentComponent },
    {path: 'student-details/:id',  component: StudentDetailsComponent },

    {path: 'manage-group', component: ManageGroupComponent},
    {path: 'create-group',  component: CreateGroupComponent },
    {path: 'update-group/:id',  component: UpdateGroupComponent },
    {path: 'details-group/:id',  component: DetailsGroupComponent },
    {path: 'teacherspace',  component: TeacherspaceComponent },
 { path: 'addexam' , component: AddexamComponent},
{path : 'exams' , component: ExamsComponent},
    {path: 'liststudents',  component: TeacherspaceComponent },


    {path: 'manage-subject', component: ManageSubjectComponent},
    {path: 'create-subject',  component: CreateSubjectComponent },
    {path: 'update-subject/:id',  component: UpdateSubjectComponent },

];
