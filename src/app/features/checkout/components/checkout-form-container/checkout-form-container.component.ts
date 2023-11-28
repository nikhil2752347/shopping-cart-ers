import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/features/basket/services/shopping.cart.service';
import { IProduct } from '../../../home/interfaces/product.interface';
import { ICheckOutForm } from '../../interfaces/checkout.interface';
import { ShoppingCartStateService } from '../../services/shopping.cart.state';

@Component({
  selector: 'app-checkout-form-container',
  templateUrl: './checkout-form-container.component.html',
  styleUrls: ['./checkout-form-container.component.scss']
})
export class CheckoutFormContainerComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(public shoppingCartStateService: ShoppingCartStateService,
    public shoppingCartService: ShoppingCartService,
    private _router: Router) {

  }

  ngOnInit(): void {
    this.products = this.shoppingCartStateService.shoppingCartSelectedItems;
  }

  submitData(item: ICheckOutForm) {
    this.shoppingCartStateService.saveCheckoutData = item;
    this._router.navigateByUrl('checkout/acknowledgement')
  }

}
