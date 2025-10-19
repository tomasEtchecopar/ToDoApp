import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemForm } from './to-do/item-form/item-form';
import { ItemList } from "./to-do/item-list/item-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemForm, ItemList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
