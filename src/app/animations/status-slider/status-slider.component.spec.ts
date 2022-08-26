import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSliderComponent } from './status-slider.component';

describe('StatusSliderComponent', () => {
  let component: StatusSliderComponent;
  let fixture: ComponentFixture<StatusSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
