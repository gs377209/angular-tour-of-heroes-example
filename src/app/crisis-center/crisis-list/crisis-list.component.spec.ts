import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

import { CrisisListComponent } from './crisis-list.component';
import { CrisisService } from '../crisis.service';

describe('CrisesComponent', () => {
  let component: CrisisListComponent;
  let fixture: ComponentFixture<CrisisListComponent>;

  beforeEach(async () => {
    const crisisService = jasmine.createSpyObj('CrisisService', ['getCrises']);
    const c$ = cold('---x|', { x: [] });
    crisisService.getCrises.and.returnValue(c$);
    const activatedRoute = new ActivatedRouteStub({ id: '1' });

    await TestBed.configureTestingModule({
      declarations: [CrisisListComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: CrisisService, useValue: crisisService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CrisisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));
});
