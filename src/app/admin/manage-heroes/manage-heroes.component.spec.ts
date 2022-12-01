import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminModule } from '../admin.module';

import { ManageHeroesComponent } from './manage-heroes.component';

describe('ManageHeroesComponent', () => {
  let component: ManageHeroesComponent;
  let fixture: ComponentFixture<ManageHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
