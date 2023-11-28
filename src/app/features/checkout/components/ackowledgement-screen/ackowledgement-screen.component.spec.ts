import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AckowledgementScreenComponent } from './ackowledgement-screen.component';

describe('AckowledgementScreenComponent', () => {
  let component: AckowledgementScreenComponent;
  let fixture: ComponentFixture<AckowledgementScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AckowledgementScreenComponent]
    });
    fixture = TestBed.createComponent(AckowledgementScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
