import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
private http = inject(HttpClient)

  getproducts(){
    return this.http.get<IProduct>('assets/APIs/product-list.json')
  }

}
