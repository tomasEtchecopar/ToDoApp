import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemForm } from './to-do/item-form/item-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
