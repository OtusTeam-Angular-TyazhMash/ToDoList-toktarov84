import { Component, ViewEncapsulation } from '@angular/core';
import { ToDoListService } from '../../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToDoListComponent {
  itemList: Map<number, {text: string, description: string}>;
  text: string = '';
  description: string = '';

  constructor(private toDoListService: ToDoListService) {
    this.itemList = toDoListService.getItemList();
  }

  addItem(addText: string, addDescription: string) {
    if (!addText) return;

    this.itemList.set(
      Math.max(...this.itemList.keys(), -1) + 1,
      {
        text: addText,
        description: addDescription
      }
    );
    this.text = '';
    this.description = '';
  }
}
