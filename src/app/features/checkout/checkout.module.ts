import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout.routing.module';
import { MaterialModule } from 'src/app/material.module';
import { CheckoutFormContainerComponent } from './components/checkout-form-container/checkout-form-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AckowledgementScreenComponent } from './components/ackowledgement-screen/ackowledgement-screen.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CheckoutRoutingModule
  ],
  exports: [
    CheckoutFormComponent,
    AckowledgementScreenComponent,
    CheckoutFormContainerComponent
  ],
  declarations: [
    CheckoutFormComponent,
    AckowledgementScreenComponent,
    CheckoutFormContainerComponent
  ],
  providers: [
  ],
})
export class CheckoutModule { }