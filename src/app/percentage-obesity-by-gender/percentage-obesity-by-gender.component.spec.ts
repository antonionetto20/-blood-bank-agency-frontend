import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageObesityByGenderComponent } from './percentage-obesity-by-gender.component';

describe('PercentageObesityByGenderComponent', () => {
  let component: PercentageObesityByGenderComponent;
  let fixture: ComponentFixture<PercentageObesityByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageObesityByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageObesityByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
