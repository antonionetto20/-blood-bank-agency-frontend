import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageBmiByAgeComponent } from './average-bmi-by-age.component';

describe('AverageBmiByAgeComponent', () => {
  let component: AverageBmiByAgeComponent;
  let fixture: ComponentFixture<AverageBmiByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageBmiByAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageBmiByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
