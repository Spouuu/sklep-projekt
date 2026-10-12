import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [RouterLink, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  errorMessage = '';

  constructor(private router: Router) {}

  pay() {
    this.errorMessage = '';

    this.router.navigate(['/order-summary']);
  }
}