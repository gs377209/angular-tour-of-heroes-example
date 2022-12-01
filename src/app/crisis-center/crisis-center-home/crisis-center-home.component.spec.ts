import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrisisCenterModule } from '../crisis-center.module';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';

describe('CrisisCenterHomeComponent', () => {
  let component: CrisisCenterHomeComponent;
  let fixture: ComponentFixture<CrisisCenterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrisisCenterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CrisisCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
