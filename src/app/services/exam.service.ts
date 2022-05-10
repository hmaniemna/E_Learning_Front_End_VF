import { Injectable } from '@angular/core';
import { HttpClient ,  HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../classes/exam';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl= "http://localhost:8080/api/v1"
  constructor(private httpClient: HttpClient) { }
   //return the student list


  //to create a student
  createTest(exam: Exam):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,exam);
  }
   //we'll call the specific student to update by id
  // gettestById(id:number):Observable<Exam>{
   // return this.httpClient.get<Exam>(`${this.baseUrl}/${id}`);
  //s}
  //downloadFile(id:number):Observable<>{
  //  return this.httpClient.get<>(`${this.baseUrl}/${id}`);
 // }
 // define function to upload files



 upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.httpClient.request(req);
}

getAlltests(): Observable<any> {
   return this.httpClient.get(`${this.baseUrl}/files`);
 }


 deletetest(idS: number):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/deletetest/${idS}`);
}

getExamById(idS:number):Observable<Exam>{
  return this.httpClient.get<Exam>(`${this.baseUrl}/files/${idS}`);

}
downloadtest(idS:number): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/downloadFile/${idS}`);
}


}
