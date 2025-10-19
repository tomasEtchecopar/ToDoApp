import { Component, inject, OnInit } from '@angular/core';
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
export class ItemList implements OnInit {

  private readonly itemStore = inject(ItemStore);
  protected readonly item$ = this.itemStore.getItems();
  private readonly itemService = inject(ItemService);
  
  ngOnInit(){
    this.itemService.getAll().subscribe({
      next: items => this.itemStore.set(items),
      error: err => console.error('Error cargando items', err)
    })
  }

  
  deleteItem(id?: number): void {
    if(id === undefined) return;
    this.itemService.delete(id).subscribe({
      next: () => this.itemStore.remove(id),
      error: err => console.error('Error al eliminar:', err)
    });
  }

  onToggle(item: Item){
    const updated = {...item, done: !item.done};
    this.itemService.update(updated).subscribe({
      next: i => this.itemStore.update(i),
      error: err => console.error('Error al actualizar', err)
    });
  
  }
}