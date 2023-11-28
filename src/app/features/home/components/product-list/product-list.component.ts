import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductsListComponent {
  
  public hoveredElement!: number;

  @Input() products: IProduct[] = [];
  @Output() newItemAdded = new EventEmitter<IProduct>();

  constructor() {}

  addProduct(item: IProduct) {
    this.newItemAdded.emit(item);
  }

  toggleHover(id: number) {
    this.hoveredElement = id;
  }

  removeHover() {
    this.hoveredElement = -1;
  }
}
