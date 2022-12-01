import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminModule } from '../admin.module';

import { ManageCrisesComponent } from './manage-crises.component';

describe('ManageCrisesComponent', () => {
  let component: ManageCrisesComponent;
  let fixture: ComponentFixture<ManageCrisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCrisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
