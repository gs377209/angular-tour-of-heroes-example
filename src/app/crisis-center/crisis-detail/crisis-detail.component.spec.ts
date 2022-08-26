import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

import { Crisis } from '../crisis';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from '../crisis.service';

describe('CrisisDetailComponent', () => {
  let component: CrisisDetailComponent;
  let fixture: ComponentFixture<CrisisDetailComponent>;
  let expectedCrisis: Crisis;

  beforeEach(async () => {
    expectedCrisis = { id: 1, name: 'Test Crisis' };

    const activatedRoute = new ActivatedRouteStub(
      undefined,
      undefined,
      undefined,
      { crisis: expectedCrisis }
    );
    const crisisService = jasmine.createSpyObj('CrisisService', ['getCrisis']);
    const c$ = cold('---x|', { x: expectedCrisis });
    crisisService.getCrisis.and.returnValue(c$);

    await TestBed.configureTestingModule({
      declarations: [CrisisDetailComponent],
      providers: [
        { provide: CrisisService, useValue: crisisService },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CrisisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
