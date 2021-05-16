import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDonorsByBloodTypeComponent } from './amount-donors-by-blood-type.component';

describe('AmountDonorsByBloodTypeComponent', () => {
  let component: AmountDonorsByBloodTypeComponent;
  let fixture: ComponentFixture<AmountDonorsByBloodTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountDonorsByBloodTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDonorsByBloodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
