import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  @Input() itemList!: {id: number, text: string, description: string}[];
  @Output() itemListChange = new EventEmitter();
  isLoading: boolean = true;
  selectedItemId!: number;
  description!: string;
  
  deleteItem(id: number) {
    this.itemList.splice(this.itemList.findIndex(it => it.id === id), 1);
    this.itemListChange.emit(this.itemList);
    if (id == this.selectedItemId) {
      this.selectedItemId = -1;
    }
  }

  currentDescription() {
    if (this.selectedItemId == null) return "";
    if (this.selectedItemId < 0) return "";
    
    return this.itemList[this.selectedItemId].description;
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500);
  }
}