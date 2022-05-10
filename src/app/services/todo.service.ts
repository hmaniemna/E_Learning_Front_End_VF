import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {Todo} from '../classes/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos/`);


  }


  createTodo(todoData: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/todos/`, todoData);

  }

  updateTodo(todoData: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl + '/todos/' + todoData.id, todoData);

  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseUrl}/todos/${id}` );

  }

getTodosByTeacherId(teacher_id: number) {
  return this.http.get<Todo[]>(`${this.baseUrl}/todolist/${teacher_id}`);
}

}
