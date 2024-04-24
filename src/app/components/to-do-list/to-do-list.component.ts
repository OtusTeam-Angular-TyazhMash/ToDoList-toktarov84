import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToDoListComponent {
  text: string = '';
  description: string = '';

  itemList: {id: number, text: string, description: string}[] = [
    {id: 0, text: 'Buy a new gaming laptop', description: 'Description 1'},
    {id: 1, text: 'Complete previous task', description: 'Description 2'},
    {id: 2, text: 'Create some angular app', description: 'Description 3'}
  ];

  addItem(addText: string, addDescription: string) {
    /* Без проверки на пустоту, при быстрых кликах нижнего
       Delete > Add Task иногда добавлялся пустой элемент. */
    if (!addText) return;

    this.itemList.push({
      id: Math.max(...this.itemList.map(it => it.id), -1) + 1,
      text: addText,
      description: addDescription
    });
    this.text = '';
    this.description = '';
  }
}
