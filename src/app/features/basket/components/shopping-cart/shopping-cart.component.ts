import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { IProduct } from '../../../home/interfaces/product.interface';
import { ShoppingCartService } from '../../services/shopping.cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  @Input() products: IProduct[] = [];
  @Output() newItemAdded = new EventEmitter<{index: number, item: IProduct}>();
  @Output() newItemDeleted = new EventEmitter<{index: number, item: IProduct}>();
  @Output() deleteAllQuantity = new EventEmitter<number>();
  @Output() onCheckoutButtonclicked = new EventEmitter();
  
  constructor(public shoppingCartService: ShoppingCartService) {
  }

  onClickDelete(index: number, item: IProduct) {
    this.newItemDeleted.emit({
      index: index,
      item: item
    });
  }

  allQuantityDeleted(index: number) {
    this.deleteAllQuantity.emit(index);
  }

  checkoutButtonClicked() {
    this.onCheckoutButtonclicked.emit();
  }

  addQuantity(index: number, item: IProduct) {
    this.newItemAdded.emit({
      index: index,
      item: item
    });
  }

}
