import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/v1/admin';
  constructor(private httpClient: HttpClient) {}

  //login to pass the data from the server to the controllers
  adminLogin(code:number,password:String): Observable<Object> {
    console.log(code,password);
    return this.httpClient.get(`${this.baseUrl}/${code}/${password}`);
  }

  //update admin infos
  updateAdmin(idA: number, admin: Admin): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${idA}`, admin);
  }

  //find a admin by id
  getAdminById(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseUrl}/${id}`);
  }

   //return the admin table infos 
   getAdminTable():Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseUrl}`);
  }



}
