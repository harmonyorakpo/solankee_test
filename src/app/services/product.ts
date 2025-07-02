import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../shared/model/product.model'


@Injectable({
  providedIn: 'root'
})
export class Product {
private http = inject(HttpClient)

  getproducts(){
    return this.http.get<IProduct>('assets/APIs/product-list.json')
  }

  getproductList(){
    return this.http.get<any>('https://g93902zutc.execute-api.eu-central-1.amazonaws.com/prod/products')
  }

}

