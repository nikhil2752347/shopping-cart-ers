import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/features/basket/services/shopping.cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public title = 'My Web Store';

  constructor(){

  }


}
