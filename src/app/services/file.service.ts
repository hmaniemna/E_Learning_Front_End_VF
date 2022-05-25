import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse, HttpRequest , HttpEvent} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FileService {
  private baseUrl= "http://localhost:8080/api/v1"


  constructor(private httpClient: HttpClient) {}

 
  getAllFiles(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/files`);
  }
}