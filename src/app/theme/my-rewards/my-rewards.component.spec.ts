import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRewardsComponent } from './my-rewards.component';

describe('MyRewardsComponent', () => {
  let component: MyRewardsComponent;
  let fixture: ComponentFixture<MyRewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRewardsComponent]
    });
    fixture = TestBed.createComponent(MyRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
