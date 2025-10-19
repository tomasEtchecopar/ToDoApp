import { Component, inject } from '@angular/core';
import { ItemStore } from '../item-store';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule} from "@angular/forms";
import { ItemService } from '../item-service';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {
 
 /*  private readonly itemStore = inject(ItemStore);
  protected readonly items = this.itemStore.getItems();
 */ 
   items: Item[] = [];

  
  constructor(private svc: ItemService){}

  ngOnInit(){
    this.load();
  }

  load(){
    this.svc.getAll().subscribe(itms => this.items = itms);
  }

  onToggle(item: Item){
    const updated = {...item, done: !item.done};
    this.svc.update(updated).subscribe(() => this.load());
  }
 }
