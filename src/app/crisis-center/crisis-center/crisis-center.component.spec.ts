import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrisisCenterModule } from '../crisis-center.module';

import { CrisisCenterComponent } from './crisis-center.component';

describe('CrisisCenterComponent', () => {
  let component: CrisisCenterComponent;
  let fixture: ComponentFixture<CrisisCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrisisCenterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CrisisCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
