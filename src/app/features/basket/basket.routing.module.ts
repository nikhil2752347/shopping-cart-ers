import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartContainerComponent } from './components/shopping-cart-container/shopping-cart-container.component';


const routes: Routes = [
  { path: '', component: ShoppingCartContainerComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }