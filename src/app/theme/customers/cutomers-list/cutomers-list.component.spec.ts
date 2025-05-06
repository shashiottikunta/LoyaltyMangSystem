import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomersListComponent } from './cutomers-list.component';

describe('CutomersListComponent', () => {
  let component: CutomersListComponent;
  let fixture: ComponentFixture<CutomersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CutomersListComponent]
    });
    fixture = TestBed.createComponent(CutomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
