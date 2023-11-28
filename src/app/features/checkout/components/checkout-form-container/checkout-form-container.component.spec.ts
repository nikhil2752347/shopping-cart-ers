import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormContainerComponent } from './checkout-form-container.component';

describe('CheckoutFormContainerComponent', () => {
  let component: CheckoutFormContainerComponent;
  let fixture: ComponentFixture<CheckoutFormContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutFormContainerComponent]
    });
    fixture = TestBed.createComponent(CheckoutFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
