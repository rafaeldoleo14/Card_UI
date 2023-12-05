import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormControlComponent } from './card-form-control.component';

describe('CardFormControlComponent', () => {
  let component: CardFormControlComponent;
  let fixture: ComponentFixture<CardFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFormControlComponent]
    });
    fixture = TestBed.createComponent(CardFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
