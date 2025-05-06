import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionAddComponent } from './transction-add.component';

describe('TransctionAddComponent', () => {
  let component: TransctionAddComponent;
  let fixture: ComponentFixture<TransctionAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransctionAddComponent]
    });
    fixture = TestBed.createComponent(TransctionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
