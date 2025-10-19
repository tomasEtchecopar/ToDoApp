import { Injectable, signal } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemStore {
  private readonly items = signal<Item[]>([]);

  getItems(){
    return this.items.asReadonly();
  }

  addItem(item: Item){
    this.items.update((items) => [...items, item]);
  }
}
