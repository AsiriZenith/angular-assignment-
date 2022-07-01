import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoDetails } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { ViewComponent } from './view-component/view-component';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  toDoDetails: ToDoDetails[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<ToDoDetails> = new MatTableDataSource();
  pageNumber: number = 1;
  total = 0;

  displayedColumns: string[] = ['id', 'title', 'status', 'action'];

  constructor(
    private TodoService: TodoService,
    private router: Router,
    public dialog: MatDialog,
    private tokenStorage: TokenStorageService
  ) {
    this.checkLoggedUser();
  }

  ngOnInit(): void {
    this.getTodoDetails();
  }

  getTodoDetails() {
    this.TodoService.getTodoDetails().subscribe((data) => {
      this.toDoDetails = data;
      this.total = data.length;
      this.dataSource = new MatTableDataSource<ToDoDetails>(this.toDoDetails);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(row: ToDoDetails): void {
    this.dialog.open(ViewComponent, {
      width: '400px',
      data: row,
    });
  }

  checkLoggedUser() {
    if (!this.tokenStorage.getLogingStatus()) {
      this.router.navigate(['/']);
    }
  }
}
