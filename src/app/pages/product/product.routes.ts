import { Routes } from '@angular/router';
import { Product } from './product';
import { ProductList } from './product-list/product-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

export const productRoutes: Routes = [
  {
    path: '',
    component: Product,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        component: ProductList,
      },
      {
        path: 'cart',
        component: ShoppingCart,
      },
    ],
  },
];
