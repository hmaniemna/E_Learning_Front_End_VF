import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../classes/teacher';
import { Observable } from 'rxjs';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  

  private baseUrl="http://localhost:8080/api/v1/teachers"

  constructor(private httpClient:HttpClient) { }

  //login to pass the data from the server to the controllers
  teacherLogin(emailId:String, password:String): Observable<Object> {
    console.log(emailId, password);
    return this.httpClient.get(`${this.baseUrl}/${emailId}/${password}`);
  }

  //return the teacher list
  getTeacherList():Observable<Teacher[]>{
   return this.httpClient.get<Teacher[]>(`${this.baseUrl}`);
  }

  //create a new teacher
  createTeacher(teacher:Teacher):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,teacher);
  }

  //add the updated teacher to the list
  updateTeacher(id:number,teacher:Teacher):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,teacher);
  }

  //delete a teacher
  deleteTeacher(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  //call a teacher by id
  getTeacherById(id:number):Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.baseUrl}/${id}`);
  }
  //return the list of courses
  getAllcourses(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);}

}
