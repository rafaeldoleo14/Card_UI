import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardsPageComponent } from './show-cards-page.component';

describe('ShowCardsPageComponent', () => {
  let component: ShowCardsPageComponent;
  let fixture: ComponentFixture<ShowCardsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCardsPageComponent]
    });
    fixture = TestBed.createComponent(ShowCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
