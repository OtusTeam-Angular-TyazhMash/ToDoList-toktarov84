import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../../../to-do-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  itemList!: Map<number, {text: string, description: string}>;
  isLoading: boolean = true;
  selectedItemId!: number;
  description!: string;

  constructor(private toDoListService: ToDoListService) {
    this.itemList = toDoListService.getItemList();
  }
  
  deleteItem(id: number) {
    this.itemList.delete(id);
    if (id == this.selectedItemId) {
      this.selectedItemId = -1;
    }
  }

  currentDescription() {
    if (this.selectedItemId == null) return "";
    if (this.selectedItemId < 0) return "";
    
    return this.itemList.get(this.selectedItemId)?.description;
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500);
  }
}