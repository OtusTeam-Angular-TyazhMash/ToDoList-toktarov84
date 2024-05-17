import { Component } from '@angular/core';
import { ToDoListService } from '../to-do-list/to-do-list.service';

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html'
})
export class TodoCreateItemComponent {
  constructor(protected toDoListService: ToDoListService) {}
}
