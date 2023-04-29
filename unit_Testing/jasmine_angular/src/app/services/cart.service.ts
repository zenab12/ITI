import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class cartService {
  constructor() {}

  public getCart() {
    return 'your cart : 1,2,3';
  }
}
