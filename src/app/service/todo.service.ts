import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoData } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getTodoDetails(): Observable<ToDoData[]> {
    return this.httpClient.get<ToDoData[]>(this.baseUrl);
  }

  getTodoDetailsById(id: number) {
    let url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<ToDoData>(url);
  }
}
