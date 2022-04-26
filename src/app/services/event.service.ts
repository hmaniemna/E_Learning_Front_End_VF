import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../classes/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  private baseUrl= "http://localhost:8080/api/v1/events"

  constructor(private httpClient: HttpClient) { }

  //return the event list 
  getEventList():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl}`);
  }

  //find a event by id
  getEventById(id:number):Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseUrl}/${id}`);
  }

  //create a event we'll return an object
  createEvent(event: Event):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,event);
  }

  //update an event
  updateEvent(id:number, event:Event):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,event);
  }

  //delete an event
deleteEvent(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}

}
