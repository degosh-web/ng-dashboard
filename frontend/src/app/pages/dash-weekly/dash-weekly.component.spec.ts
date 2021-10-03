import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashWeeklyComponent } from './dash-weekly.component';

describe('DashWeeklyComponent', () => {
  let component: DashWeeklyComponent;
  let fixture: ComponentFixture<DashWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashWeeklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
