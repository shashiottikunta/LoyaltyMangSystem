import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyAddComponent } from './loyalty-add.component';

describe('LoyaltyAddComponent', () => {
  let component: LoyaltyAddComponent;
  let fixture: ComponentFixture<LoyaltyAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoyaltyAddComponent]
    });
    fixture = TestBed.createComponent(LoyaltyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
