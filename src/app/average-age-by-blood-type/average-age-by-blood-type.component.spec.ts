import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAgeByBloodTypeComponent } from './average-age-by-blood-type.component';

describe('AverageAgeByBloodTypeComponent', () => {
  let component: AverageAgeByBloodTypeComponent;
  let fixture: ComponentFixture<AverageAgeByBloodTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageAgeByBloodTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageAgeByBloodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
