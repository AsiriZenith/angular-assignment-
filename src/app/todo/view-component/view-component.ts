import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoData } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view-component.html',
  styleUrls: ['./view-component.css'],
})
export class ViewComponent implements OnInit {
  toDoDetails?: ToDoData;

  constructor(
    private todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: ToDoData
  ) {}

  ngOnInit(): void {
    this.getTodoDetailsById();
  }

  getTodoDetailsById() {
    this.todoService.getTodoDetailsById(this.data.id).subscribe((data) => {
      this.toDoDetails = data;
    });
  }
}
