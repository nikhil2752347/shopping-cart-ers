import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AckowledgementScreenComponent } from './components/ackowledgement-screen/ackowledgement-screen.component';
import { CheckoutFormContainerComponent } from './components/checkout-form-container/checkout-form-container.component';


const routes: Routes = [
  { path: '', component: CheckoutFormContainerComponent },
  { path: 'acknowledgement', component: AckowledgementScreenComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }