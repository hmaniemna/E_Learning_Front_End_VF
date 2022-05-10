import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse, HttpRequest , HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkSService {

  private baseUrl= "http://localhost:8080/api/v1"

  constructor(private httpClient: HttpClient) { }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
  
    formData.append('file', file);
  
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadWorkS`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.httpClient.request(req);
  }

  getAllWorkS(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/workS`);
  }

}
