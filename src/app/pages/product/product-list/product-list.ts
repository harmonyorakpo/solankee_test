import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TruncatePipe } from '@pipes/truncate-pipe';
import { Product } from '@services/product';
import { Subject } from 'rxjs';
import { Loader } from '../../../shared/components/loader/loader';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProduct } from '@models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    TruncatePipe,
    MatInputModule,
    MatButtonModule,
    Loader,
    RouterModule,
    
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private productService = inject(Product);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  destroy$ = new Subject<void>();
  loading: boolean = false;
  public currency!: ['USD', 'EUR', 'GBP'];

  products$ = this.productService.getproductList();

  viewProduct(product: IProduct) {
    this.router.navigate(['../product-list', product.id], {
      relativeTo: this.route,
      state: { product },
    });
    console.log('view item');
  }

  addToCart(event: Event, item: IProduct) {
    event.stopPropagation();

    console.log('Adding to cart:', item);
  }
}
