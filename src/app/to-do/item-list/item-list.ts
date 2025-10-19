import { Component, inject } from '@angular/core';
import { ItemStore } from '../item-store';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule} from "@angular/forms";

@Component({
  selector: 'app-item-list',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  private readonly itemStore = inject(ItemStore);
  protected readonly items = this.itemStore.getItems();
}
