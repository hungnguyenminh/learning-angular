import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [NgIf],
  templateUrl: './detail.component.html',
  standalone: true,
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.fetchProductDetail(productId);
  }

  fetchProductDetail(id: string) {
    // Giả lập API call
    this.product = {
      id,
      name: 'Product ' + id,
      description: 'This is the description for product ' + id,
      price: 100 + +id,
    };
  }
}
