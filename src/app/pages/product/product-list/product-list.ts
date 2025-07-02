import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TruncatePipe } from '@pipes/truncate-pipe';
import { Product } from '@services/product';
import { Subject } from 'rxjs';
import { Loader } from "../../../shared/components/loader/loader";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, TruncatePipe, MatInputModule, MatButtonModule, Loader],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private productService = inject(Product);
  destroy$ = new Subject<void>();
  loading: boolean = false;
  public currency!: ['USD', 'EUR', 'GBP'];

  products$ = this.productService.getproductList();
}
