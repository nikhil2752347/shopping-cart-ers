import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/shared/service/storage.service';
import { IProduct } from '../../home/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartProducts: IProduct[]= [];
  public totalAmount: number = 0;
  private _products: BehaviorSubject<IProduct[]>=new BehaviorSubject<IProduct[]>([])

  constructor(private _storageService: StorageService) { }

  get products(){
    return this._products.asObservable();
  }

  addNewProduct(index: number, product: IProduct){
    const duplicateProduct = this.cartProducts.find(p => p.id === product.id);
  
    if(duplicateProduct && this.cartProducts.length) {
      this.cartProducts[index].quantity += 1;
      this.cartProducts[index].totalAmount = product.price * this.cartProducts[index].quantity;
    }
    else {
      product.totalAmount = product.price * product.quantity;
      this.cartProducts.push(product);
    }
    this._setCartData();
  }

  deleteProduct(index: number, product: IProduct){
    const duplicateProduct = this.cartProducts.find(p => p.id === product.id);
    if(duplicateProduct) {
      if(product.quantity === 1) {
        this.cartProducts.splice(index,1)
      }
      else {
        this.cartProducts[index].quantity -= 1;
        this.cartProducts[index].totalAmount = product.price * this.cartProducts[index].quantity;
      }
    }
      else {
        this.cartProducts.splice(index,1)
    }
    this._setCartData();
  }

  deleteAllQuantity(index: number) {
    this.cartProducts.splice(index, 1)
    this._setCartData();
  }

  getTotal() {
    let totalAmount = 0;
    let cartProducts = this._storageService.getItem('selectedItem') as IProduct[];
    if (cartProducts != null && cartProducts.length > 0) {
      cartProducts.forEach((cartItem: IProduct) => {
        if(cartItem?.totalAmount) {
          totalAmount += cartItem?.totalAmount;
        }
      });
      this.totalAmount =  totalAmount;
    }
    else {
      this.totalAmount = 0;
    }
  }

  resetCartProducts() {
    this.cartProducts = [];
    this._products.next(this.cartProducts);
    sessionStorage.clear();

  }

  private _setCartData() {
    this._storageService.setItem("selectedItem", this.cartProducts);
    this._products.next(this.cartProducts);
    this.getTotal();
  }

}
