import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../classes/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl= "http://localhost:8080/api/v1/subjects"

  constructor(private httpClient: HttpClient) { }

  //return the subject list 
  getSubjectList():Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseUrl}`);
  }

  //find a subject by id
  getSubjectById(id:number):Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.baseUrl}/${id}`);
  }

  //create a subject we'll return an object
  createSubject(subject: Subject):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,subject);
  }

  //update a subeject
  updateSubject(idSub:number, subject:Subject):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${idSub}`,subject);
  }

  //delete a subject
deleteSubject(idSub:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${idSub}`);
}

}

