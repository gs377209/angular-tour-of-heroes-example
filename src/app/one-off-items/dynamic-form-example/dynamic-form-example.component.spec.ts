import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OneOffItemsModule } from '../one-off-items.module';

import { DynamicFormExampleComponent } from './dynamic-form-example.component';

describe('DynamicFormExampleComponent', () => {
  let component: DynamicFormExampleComponent;
  let fixture: ComponentFixture<DynamicFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneOffItemsModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
