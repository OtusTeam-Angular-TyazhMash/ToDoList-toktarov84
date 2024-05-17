import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ToDoListService } from '../to-do-list/to-do-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})

export class ListItemComponent {
  constructor(protected dataService: ToDoListService) {}
}