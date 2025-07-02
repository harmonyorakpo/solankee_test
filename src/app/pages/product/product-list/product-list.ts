import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IProduct } from '@models/product.model';
import { TruncatePipe } from '@pipes/truncate-pipe';
import { Product } from '@services/product';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, TruncatePipe, MatInputModule , MatButtonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private productService = inject(Product);
  destroy$ = new Subject<void>();
  loading: boolean = false;
  public currency!: ['USD', 'EUR', 'GBP']

   description:string = 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive.';

   products$ = this.productService.getproductList()

  ngOnInit(): void {
    // this.productService
    //   .getproducts()
    //   .pipe(
    //     finalize(() => {
    //       this.loading = false;
    //     }),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe({
    //     next: (res: IProduct) => {
    //       console.log('Products loaded successfully', res);
    //     },
    //   });


      this.productService.getproductList().subscribe({
        next: (res) => {
          console.log(res)
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
