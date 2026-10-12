import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-page/product-page')
        .then(m => m.ProductPage)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart').then(m => m.Cart)
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./payment/payment').then(m => m.Payment)
  },
  {
    path: 'order-summary',
    loadComponent: () =>
      import('./order-summary/order-summary')
        .then(m => m.OrderSummary)
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./error-page/error-page')
        .then(m => m.ErrorPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];