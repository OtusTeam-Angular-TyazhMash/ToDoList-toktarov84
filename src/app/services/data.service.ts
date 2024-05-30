import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { ObservablesService } from './observables.service';

export class Status {
  static ALL = null;
  static InProgress = "InProgress";
  static Complete = "Complete";
}

export class Item {
  id!: number;
  text!: string;
  description!: string;
  status!: Status;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:3000/tasks';
  itemList!: Item[];
  text: string = '';
  description: string = '';
  isLoading: boolean = true;
  editedId!: number;
  filterStatus: Status|null = Status.ALL;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private observable: ObservablesService
  ) {
    this.loadItemListFromServer();
  }

  deselect() {
    this.router.navigate(['']);
    this.editedId = -1;
  }

  getItem(id: number) {
    return this.itemList.find(item => item.id === id);
  }

  toDoFilter(filterStatus: Status|null) {
    if (filterStatus == null) return this.itemList;

    return [...this.itemList].filter(
      item => item.status === filterStatus
    );
  }

  loadItemListFromServer() {
    this.isLoading = true;

    this.observable.httpGet<Item[]>(this.url)
    .subscribe({
      next: items => {
        this.itemList = items;
        setTimeout(() => this.isLoading = false, 200);
        this.toastService.showToast("Data received");
      }
    });
  }

  addItem(text: string, addDescription: string) {
    if (!text) return;

    this.observable.httpPost(this.url,
      {
        text: text,
        description: addDescription,
        status: Status.InProgress
      }
    ).subscribe({
      next: (item) => {
        this.itemList.push(item as Item);
        this.text = '';
        this.description = '';
        this.toastService.showToast("Item added");
      }
    });
  }

  deleteItem(id: number) {
    this.observable.httpDelete(this.url, id)
    .subscribe({
      next: () => {
        this.itemList = this.itemList.filter(it => it.id !== id);
        this.toastService.showToast("Item deleted")
      } 
    });
  }

  editItem(id: number, text: string) {
    if (!text) return;

    this.observable.httpPatch(this.url, id, {text: text})
    .subscribe({
      next: () => {
        this.getItem(id)!.text = text;
        this.editedId = -1;
        this.toastService.showToast("Item edited")
      }
    });
  }

  setStatus(id: number) {
    var status = Status.InProgress;
    if (this.getItem(id)!.status === Status.InProgress) {
      status = Status.Complete;
    }
    this.observable.httpPatch(this.url, id, {status: status})
    .subscribe({
      next: () => {
        this.getItem(id)!.status = status;
      }
    });
  }
}
