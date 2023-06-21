import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordwithotpComponent } from './forgotpasswordwithotp.component';

describe('ForgotpasswordwithotpComponent', () => {
  let component: ForgotpasswordwithotpComponent;
  let fixture: ComponentFixture<ForgotpasswordwithotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpasswordwithotpComponent]
    });
    fixture = TestBed.createComponent(ForgotpasswordwithotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
