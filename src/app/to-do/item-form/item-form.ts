import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemStore } from '../item-store';

@Component({
  selector: 'app-item-form',
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {

  private readonly formBuilder = inject(FormBuilder);
  private readonly itemStore = inject(ItemStore);
  protected readonly form = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
    done: [false]
  });

  get title(){
    return this.form.controls.title;
  }

  handleSubmit(){
    if(this.form.invalid){
      alert("Invalid form");
      return;
    }
    const item = this.form.getRawValue();
    this.itemStore.addItem(item);

    this.form.reset();
    }
}
