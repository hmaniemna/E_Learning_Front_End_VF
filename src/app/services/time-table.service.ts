import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeTable } from '../classes/time-table';
import { Course } from '../classes/course';
import { Observable } from 'rxjs';
import { TimeTableChange } from '../change/TimeTableChange';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  private baseUrl="http://localhost:8080/api/v1/timetables"

  constructor(private httpClient:HttpClient) { }

  //find a timetable by course id
  getTimeTableByCourse(course_id: number):Observable<Object> {
    return this.httpClient.get<TimeTable[]>(`${this.baseUrl}/${course_id}`);
  }

  //return the calendars list
  getTimeTableList():Observable<TimeTable[]>{
    return this.httpClient.get<TimeTable[]>(`${this.baseUrl}`);
   }
 
   //create a new TimeTable
   createTimeTable(timeTable:TimeTable):Observable<Object>{
     return this.httpClient.post(`${this.baseUrl}`,timeTable);
   }
 
   //add the updated TimeTable to the list
   updateTimeTable(id:number,timeTable:TimeTableChange):Observable<Object>{
     return this.httpClient.put(`${this.baseUrl}`,timeTable);
   }
 
   //delete a TimeTable
   deleteTimeTable(id:number):Observable<Object>{
     return this.httpClient.delete(`${this.baseUrl}/${id}`);
   }
 
   //call a TimeTable by id
   getTimeTableById(id:number):Observable<TimeTable>{
     return this.httpClient.get<TimeTable>(`${this.baseUrl}/${id}`);
   }
}
