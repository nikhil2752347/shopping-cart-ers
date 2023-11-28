import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICheckOutForm } from '../../interfaces/checkout.interface';
import { CheckOutFormBuilderService } from '../../services/utils/checkout.form.builder';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  public minDate!: Date;
  public maxDate!: Date;

  @Output() onCheckFormSubmit = new EventEmitter<ICheckOutForm>();

  public requiredErrorMessage = 'This is a required field';
  public checkOutForm!: FormGroup;

  get paymentDetailsFormGroup(): FormGroup {
    return this.checkOutForm.get('paymentDetails') as FormGroup;
  }

  get billingAddressFormGroup(): FormGroup {
    return this.checkOutForm.get('billingAddress') as FormGroup;
  }

  get shippingAddressFormGroup(): FormGroup {
    return this.checkOutForm.get('shippingAddress') as FormGroup;
  }

  constructor(public checkOutFormBuilderService: CheckOutFormBuilderService) {

  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 4, 11, 31);
    this.checkOutForm = this.checkOutFormBuilderService.buildForm();
  }

  submitData() {
    this.onCheckFormSubmit.emit(this.checkOutForm.value)
  }

}
