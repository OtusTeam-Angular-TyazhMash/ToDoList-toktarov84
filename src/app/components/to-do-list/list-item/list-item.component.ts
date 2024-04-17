import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent {
  @Input() itemList!: {id: number, text: string}[];
  @Output() itemListChange = new EventEmitter();

  deleteItem(id: number) {
    this.itemList.splice(this.itemList.findIndex(it => it.id === id), 1);
    this.itemListChange.emit(this.itemList);

  }
}
