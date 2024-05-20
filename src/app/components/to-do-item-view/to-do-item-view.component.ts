import { Component } from '@angular/core';
import { ToDoListService } from '../to-do-list/to-do-list.service';

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html'
})
export class ToDoItemViewComponent {
  constructor(protected dataService: ToDoListService) {}
}
