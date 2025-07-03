import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cart } from '@services/cart';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
  ],

  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
})
export class ShoppingCart {
    private cartService = inject(Cart);
    private router = inject(Router)
    private route = inject(ActivatedRoute)
    public currency!: ['USD', 'EUR', 'GBP'];

  cartItems = this.cartService.items;
  totalItems = this.cartService.itemCount;
  totalPrice = this.cartService.totalPrice;

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const quantity = parseInt(target.value, 10);
    
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    }
  }

  increaseQuantity(item: any): void {
    this.cartService.updateQuantity(item.id, item.cartQuantity + 1);
  }

  decreaseQuantity(item: any): void {
    if (item.cartQuantity > 1) {
      this.cartService.updateQuantity(item.id, item.cartQuantity - 1);
    }
  }
  // increaseQuantity(item: CartItem): void {
  //   this.cartService.updateQuantity(item.id, item.cartQuantity + 1);
  // }

  // decreaseQuantity(item: CartItem): void {
  //   if (item.cartQuantity > 1) {
  //     this.cartService.updateQuantity(item.id, item.cartQuantity - 1);
  //   }
  // }

  clearCart(): void {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }

  productList(){
    this.router.navigate(['product/product-list'])
  }

  checkout(): void {
    // Implement your checkout logic here
    console.log('Proceeding to checkout with items:', this.cartItems());
    alert('Checkout functionality to be implemented!');
  }
}
