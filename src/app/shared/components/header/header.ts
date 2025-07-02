import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cart } from '@services/cart';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   private cartService = inject(Cart);
  
  // Use the signals from the cart service
  cartItemCount = this.cartService.itemCount;
  
  // Optional: You can also access total price if needed
  cartTotal = this.cartService.totalPrice;
  
  // Optional: Access cart items if needed
  cartItems = this.cartService.items;
}
