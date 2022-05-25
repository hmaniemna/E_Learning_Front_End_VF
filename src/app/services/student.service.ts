import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../classes/group';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseUrl= "http://localhost:8080/api/v1/"

  constructor(private httpClient: HttpClient) { }

  //login to pass the data from the server to the controllers   its not right!!!
  studentLogin(email:String,password:String):Observable<Student>{

    return this.httpClient.get <Student>(`${this.baseUrl}/${email}/${password}`);
  }

//return students by teacher id
getstudentbyteacher(id : number):Observable<Student[]>{
  return this.httpClient.get<Student[]>(`${this.baseUrl}/studentlist/${id}`);
}

  //return the student list
  getStudentList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}/students`);
  }

  //to create a student
  createStudent(student:Student):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/students`,student);
  }

  //to add the updated student to the list
  updateStudent(idS:number, student: Student):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/students/${idS}`,student);
  }

  //to delete a student
  deleteStudent(idS: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/students/${idS}`);
  }

  //we'll call the specific student to update by id
  getStudentById(idS:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/students/${idS}`);
  }
 
}
 