import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCardComponent } from './virtual-card.component';

describe('VirtualCardComponent', () => {
  let component: VirtualCardComponent;
  let fixture: ComponentFixture<VirtualCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualCardComponent]
    });
    fixture = TestBed.createComponent(VirtualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
