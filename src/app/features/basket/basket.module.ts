import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartContainerComponent } from './components/shopping-cart-container/shopping-cart-container.component';
import { BasketRoutingModule } from './basket.routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BasketRoutingModule
  ],
  exports: [
    ShoppingCartContainerComponent,
    ShoppingCartComponent,
  ],
  declarations: [
    ShoppingCartContainerComponent,
    ShoppingCartComponent,
  ],
  providers: [
  ],
})
export class BasketModule { }