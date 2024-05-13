import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list/to-do-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  constructor(protected toDoListService: ToDoListService) {}

  ngOnInit(): void {
    setTimeout(() => this.toDoListService.isLoading = false, 500);
  }
}