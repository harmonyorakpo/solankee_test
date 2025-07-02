import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { IProduct } from '@models/product.model';
import { NotificationService } from '@services/notification';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, MatButton],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem implements OnInit {
  private notificationService = inject(NotificationService);
  product: IProduct | null = null;

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    const state = history.state;
    this.product = state?.product;
    console.log(this.product);
  }

  addToCart(product: any) {
    console.log(product)
    console.log('Add to cart');
    this.notificationService.showNotification('success', 'item added to cart');
  }
}
