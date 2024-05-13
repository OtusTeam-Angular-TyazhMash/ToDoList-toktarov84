import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/shared/toasts/toast.service';

export enum Status { InProgress = 0, Complete = 1}

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  itemList: Map<number, {text: string, description: string, status: Status}> = new Map();
  addText: string = '';
  editText: string = '';
  description: string = '';
  isLoading: boolean = true;
  selectedItemId!: number;
  editedITemId!: number;

  constructor(private toastService: ToastService) {
    this.itemList.set(0, {
      text: 'Buy a new gaming laptop', 
      description: 'Description 1',
      status: Status.InProgress
    });
    this.itemList.set(1, {
      text: 'Complete previous task', 
      description: 'Description 2',
      status: Status.InProgress
    });
    this.itemList.set(2, {
      text: 'Create some angular app', 
      description: 'Description 3',
      status: Status.InProgress
    });
  }

  addItem(text: string, addDescription: string) {
    if (!text) return;

    this.itemList.set(
      Math.max(...this.itemList.keys(), -1) + 1,
      {
        text: text,
        description: addDescription,
        status: Status.InProgress
      }
    );
    this.addText = '';
    this.description = '';

    this.toastService.showToast("Item added");
  }

  deleteItem(id: number) {
    this.itemList.delete(id);
    if (id == this.selectedItemId) {
      this.selectedItemId = -1;
    }

    this.toastService.showToast("Item deleted")
  }

  saveItem(text: string) {
    if (!text) return;

    this.itemList.get(this.editedITemId)!.text = text;
    this.editedITemId = -1;

    this.toastService.showToast("Item saved")
  }

  setSelectedId(id: number) {
    if (this.editedITemId == id) {
      this.selectedItemId = -1;
    } else {
      this.selectedItemId = id;
      this.editedITemId = -1;
    }
  }

  setEditedItemId(id: number) {
    if (this.editedITemId == id) {
      this.editedITemId = -1;
    } else {
      this.editText = this.itemList.get(id)!.text;
      this.editedITemId = id;
      this.selectedItemId = -1;
    }
  }

  setStatus(id: number) {
    if (this.itemList.get(id)!.status == Status.Complete) {
      this.itemList.get(id)!.status = Status.InProgress;
    } else {
      this.itemList.get(id)!.status = Status.Complete;
    }
  }

  currentDescription() {
    if (this.selectedItemId == null) return "";
    if (this.selectedItemId < 0) return "";
    
    return this.itemList.get(this.selectedItemId)?.description;
  }
}
