import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '@models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, MatButton],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem implements OnInit {
  product: IProduct | null = null;

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    const state = history.state;
    this.product = state?.product;
    console.log(this.product);
  }

  addToCart() {
    console.log('Add to cart');
  }
}
