import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AnimationsModule } from '../animations.module';
import { InsertRemoveComponent } from './insert-remove.component';

describe('InsertRemoveComponent', () => {
  let component: InsertRemoveComponent;
  let fixture: ComponentFixture<InsertRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
