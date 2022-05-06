import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DayPilot} from 'daypilot-pro-angular';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  

  constructor(private httpClient: HttpClient) { }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    return this.httpClient.get("http://localhost:8080/api/v1/events?from=" + from.toString() + "&to=" + to.toString()) as Observable<any>;
  }

  getResources(): Observable<any[]> {
    return this.httpClient.get("http://localhost:8080/api/v1/TimeIntervals") as Observable<any>;
  }

  createEvent(data: EventCreateParams): Observable<EventData> {
    return this.httpClient.post("http://localhost:8080/api/v1/events/create", data) as Observable<any>;
  
  }

  moveEvent(data: EventMoveParams): Observable<EventData> {
    return this.httpClient.post("/api/v1/scheduler/events/move", data) as Observable<any>;
  }

  deleteEvent(data: EventDeleteParams):Observable<EventData> {
    return this.httpClient.post("/api/v1/schedulerevents/delete", data) as Observable<any>;
  }

}

export interface EventCreateParams {
  start: string;
  end: string;
  text: string;
  TimeIntervalId: number ;
}

export interface EventMoveParams {
  id: string | number;
  start: string;
  end: string;
  TimeIntervalId: number;
}

export interface EventData {
  id: string | number;
  start: string;
  end: string;
  text: string;
  resource: string | number;
}

export interface EventDeleteParams {
  id: string | number;
}