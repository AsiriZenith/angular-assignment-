import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoDetails } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getTodoDetails(): Observable<ToDoDetails[]> {
    return this.httpClient.get<ToDoDetails[]>(this.baseUrl);
  }

  getTodoDetailsById(id: number) {
    let url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<ToDoDetails>(url);
  }
}
