import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { asyncData } from 'src/testing/async-observable-helpers';

import { Crisis } from '../crisis';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from '../crisis.service';

describe('CrisisDetailComponent', () => {
  let component: CrisisDetailComponent;
  let fixture: ComponentFixture<CrisisDetailComponent>;
  let expectedCrisis: Crisis;

  beforeEach(async () => {
    expectedCrisis = { id: 1, name: 'Test Crisis' };

    const activatedRoute = new ActivatedRouteStub({ id: expectedCrisis.id });
    const crisisService = jasmine.createSpyObj('CrisisService', ['getCrisis']);
    crisisService.getCrisis.and.returnValue(asyncData(expectedCrisis));

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
