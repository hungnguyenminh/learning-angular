import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgForOf, NgIf],
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
  ];
}
