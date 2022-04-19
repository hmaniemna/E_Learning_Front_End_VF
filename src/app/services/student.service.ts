import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseUrl= "http://localhost:8080/api/v1/students"

  constructor(private httpClient: HttpClient) { }

  //login to pass the data from the server to the controllers   its not right!!!
  studentLogin(email:String,password:String):Observable<Object>{
    console.log(email,password);
    return this.httpClient.get(`${this.baseUrl}/${email}/${password}`);
  }

 //return the student list by level  ?????????????????????????????


  //return the student list
  getStudentList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  //to create a student
  createStudent(student:Student):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,student);
  }

  //to add the updated student to the list
  updateStudent(idS:number, student: Student):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${idS}`,student);
  }

  //to delete a student
  deleteStudent(idS: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${idS}`);
  }

  //we'll call the specific student to update by id
  getStudentById(idS:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/${idS}`);
  }
}
