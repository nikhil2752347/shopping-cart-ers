import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckOutFormBuilderService {

  constructor(private fb: FormBuilder) { } 

  public buildForm(): FormGroup {
      let response: FormGroup;
      response = this.fb.group({
        customerName: [null, [Validators.required]],
        billingAddress: this.fb.group({
          line1: [null, [Validators.required]],
          line2: [null],
          line3: [null],
          state: [null, [Validators.required]],
          postcode: [null, [Validators.required]],
          country: [null, [Validators.required]]
        }),
        shippingAddress: this.fb.group({
          line1: [null, [Validators.required]],
          line2: [null],
          line3: [null],
          state: [null, [Validators.required]],
          postcode: [null, [Validators.required]],
          country: [null, [Validators.required]]
        }),
        paymentDetails: this.fb.group({
          ccNumber: [null, [Validators.required]],
          expDate:  [null, [Validators.required]],
          cvcCode: [null, [Validators.required]],
        }),
      });
      return response;

  }

}
