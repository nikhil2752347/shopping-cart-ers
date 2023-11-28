import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCartStateService } from 'src/app/features/checkout/services/shopping.cart.state';
import { StorageService } from 'src/app/shared/service/storage.service';
import { IProduct } from '../../../home/interfaces/product.interface';
import { ShoppingCartService } from '../../services/shopping.cart.service';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.scss']
})
export class ShoppingCartContainerComponent implements OnInit {

  private _sub: Subscription = new Subscription();
  public products: IProduct[] = [];

  constructor(public shoppingCartService: ShoppingCartService,
    private _router: Router,
    public shoppingCartStateService: ShoppingCartStateService){
  }

  ngOnInit(): void {
    this._sub = this.shoppingCartService.products.subscribe( data =>{
      this.products = data
    })

  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  onClickDelete(index: number, item: IProduct) {
    this.shoppingCartService.deleteProduct(index, item)
  }

  deleteAllQuantity(index: number) {
    this.shoppingCartService.deleteAllQuantity(index)
  }

  addQuantity(index: number, item: IProduct) {
    this.shoppingCartService.addNewProduct(index, item);
  }

  onCheckoutButtonclicked() {
    this.shoppingCartStateService.shoppingCartSelectedItems = this.products;
    this._router.navigateByUrl('checkout')

  }

}
