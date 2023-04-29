import { Component } from '@angular/core';
import { cartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public cartService: cartService) {}

  counter: number = 0;

  Counter: any = () => {
    return this.counter++;
  };
  onClick(): void {}
  ngOnInit() {
    this.cartService.getCart();
  }
}
