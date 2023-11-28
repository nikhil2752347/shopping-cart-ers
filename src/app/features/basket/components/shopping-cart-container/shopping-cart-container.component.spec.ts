import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartContainerComponent } from './shopping-cart-container.component';

describe('ShoppingCartContainerComponent', () => {
  let component: ShoppingCartContainerComponent;
  let fixture: ComponentFixture<ShoppingCartContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartContainerComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
