import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionListComponent } from './transction-list.component';

describe('TransctionListComponent', () => {
  let component: TransctionListComponent;
  let fixture: ComponentFixture<TransctionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransctionListComponent]
    });
    fixture = TestBed.createComponent(TransctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
