import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoDetails } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view-component.html',
  styleUrls: ['./view-component.css'],
})
export class ViewComponent implements OnInit {
  toDoDetails?: ToDoDetails;

  constructor(
    private todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: ToDoDetails
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
