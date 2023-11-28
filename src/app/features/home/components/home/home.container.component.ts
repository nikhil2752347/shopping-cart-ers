import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/features/basket/services/shopping.cart.service';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.component.html',
  styleUrls: ['./home.container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  private _sub: Subscription = new Subscription();
  public products: IProduct[] = [];
  
  constructor(private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService){
  }

  ngOnInit(): void {
    this._sub = this.productsService.getProducts().subscribe(data => {
      this.products = data
      this.products.forEach((element) => element.quantity = 1);
    })
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  productAdded(item: IProduct){
    let index = -1;
    if(this.shoppingCartService.cartProducts.length) {
      index = this.shoppingCartService.cartProducts.findIndex(p => p.id === item.id)
    }
   
    this.shoppingCartService.addNewProduct(index, item)
  }


}
