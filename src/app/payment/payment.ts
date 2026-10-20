
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ShopService } from '../shop';

@Component({
  selector: 'app-payment',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  errorMessage = '';

  cart: any[] = [];

  paymentForm;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private shopService: ShopService
  ) {
    this.paymentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      paymentMethod: ['blik', Validators.required],
      blikCode: [''],
      cardNumber: ['']
    });

    this.cart = this.shopService.getCart();
  }

  get paymentMethod() {
    return this.paymentForm.get('paymentMethod')?.value;
  }

  get total() {
    return this.cart.reduce(
      (sum, item) => sum + item.product.price * item.amount,
      0
    );
  }

  pay() {
    this.errorMessage = '';

    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      this.errorMessage = 'Uzupełnij poprawnie wszystkie wymagane pola.';
      return;
    }

    if (
      this.paymentMethod === 'blik' &&
      !/^\d{6}$/.test(this.paymentForm.value.blikCode || '')
    ) {
      this.errorMessage = 'Kod BLIK musi mieć 6 cyfr.';
      return;
    }

    if (
      this.paymentMethod === 'card' &&
      !/^\d{16}$/.test(this.paymentForm.value.cardNumber || '')
    ) {
      this.errorMessage = 'Numer karty musi mieć 16 cyfr.';
      return;
    }

    this.router.navigate(['/order-summary']);
  }
}
