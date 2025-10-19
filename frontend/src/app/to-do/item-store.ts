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

  set(items: Item[]){
    items.forEach(item => {
      this.addItem(item);
    });
  }

  update(updatedItem: Item){
    this.items.update(items =>
      items.map(item => item.id === updatedItem.id ? updatedItem :item)
    )
  }
  addItem(item: Item){
    this.items.update((items) => [...items, item]);
  }

  remove(id: number){
    this.items.update(items => items.filter(item => item.id !== id));
  }
}
