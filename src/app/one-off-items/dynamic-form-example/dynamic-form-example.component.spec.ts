import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormExampleComponent } from './dynamic-form-example.component';

describe('DynamicFormExampleComponent', () => {
  let component: DynamicFormExampleComponent;
  let fixture: ComponentFixture<DynamicFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
