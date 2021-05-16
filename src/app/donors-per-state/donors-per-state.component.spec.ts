import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsPerStateComponent } from './donors-per-state.component';

describe('DonorsPerStateComponent', () => {
  let component: DonorsPerStateComponent;
  let fixture: ComponentFixture<DonorsPerStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorsPerStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsPerStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
