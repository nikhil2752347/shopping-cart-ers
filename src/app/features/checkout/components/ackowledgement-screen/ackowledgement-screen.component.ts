import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/features/basket/services/shopping.cart.service';
import { ShoppingCartStateService } from '../../services/shopping.cart.state';

@Component({
  selector: 'app-ackowledgement-screen',
  templateUrl: './ackowledgement-screen.component.html',
  styleUrls: ['./ackowledgement-screen.component.scss']
})
export class AckowledgementScreenComponent implements OnInit {

  public orderNumber!: number;

  constructor(public shoppingCartService: ShoppingCartService,
    private _shoppingCartStateService: ShoppingCartStateService) {
  }

  ngOnInit(): void {
    const d = new Date();
    this.orderNumber = d.valueOf();
    this._shoppingCartStateService.resetUIState();
    this.shoppingCartService.resetCartProducts();
  }

}
