import { Injectable } from '@angular/core';
import { IProduct } from '../../home/interfaces/product.interface';
import { ICheckOutForm } from '../interfaces/checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartStateService {
// below variables can be used for submitting the data to an actual api
  public shoppingCartSelectedItems: IProduct[]= [];
  public saveCheckoutData!: ICheckOutForm | null;

  constructor() { }

  resetUIState() {
    this.shoppingCartSelectedItems = [];
    this.saveCheckoutData = null;
  }

}
