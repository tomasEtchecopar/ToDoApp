import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemStore } from '../item-store';
import { ItemService } from '../item-service';
import { Item } from '../item';

@Component({
  selector: 'app-item-form',
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {

  private readonly formBuilder = inject(FormBuilder);
  private readonly itemStore = inject(ItemStore);
  private readonly itemService = inject(ItemService);

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
    const payload = this.form.getRawValue() as Item;

    this.itemService.create(payload).subscribe({
    next: (created: Item)=>{
      this.itemStore.addItem(created);
      this.form.reset({title: '', description: '', done: false});
    },
    error: (err)=>{
      console.error('Error creating item')
      alert('Error creating item. check console')
    }
    })
    }
}
