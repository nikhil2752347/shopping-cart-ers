import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/components/home/home.container.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./features/basket/basket.module')
      .then(mod => mod.BasketModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/checkout.module')
      .then(mod => mod.CheckoutModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
