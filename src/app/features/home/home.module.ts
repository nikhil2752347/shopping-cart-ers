import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { MaterialModule } from 'src/app/material.module';

import { ProductsListComponent } from './components/product-list/product-list.component';
import { HomeContainerComponent } from './components/home/home.container.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  exports: [
    ProductsListComponent,
    HomeContainerComponent
  ],
  declarations: [
    ProductsListComponent,
    HomeContainerComponent
  ],
  providers: [
  ],
})
export class HomeModule { }