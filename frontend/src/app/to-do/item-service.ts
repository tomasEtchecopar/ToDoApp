import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private api = 'http://localhost:8080/api/items';
  constructor(private http: HttpClient){}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.api);
  }

  create(i: Item){
    return this.http.post<Item>(this.api, i);
  }

  update(i: Item){
    return this.http.put<Item>(`${this.api}/${i.id}`, i);
  }

  delete(id: number){
    return this.http.delete<void>(`${this.api}/${id}`)
  }
}

