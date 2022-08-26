import { cold, getTestScheduler } from 'jasmine-marbles';
import { TestBed } from '@angular/core/testing';

import { Crisis } from './crisis';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CrisisService } from './crisis.service';

describe('CrisisDetailResolverService', () => {
  let service: CrisisDetailResolverService;
  let expectedCrisis: Crisis;

  beforeEach(() => {
    expectedCrisis = { id: 1, name: 'Test Crisis' };
    const crisisService = jasmine.createSpyObj('CrisisService', ['getCrisis']);
    const c$ = cold('---x|', { x: expectedCrisis });
    crisisService.getCrisis.and.returnValue(c$);

    TestBed.configureTestingModule({
      providers: [{ provide: CrisisService, useValue: crisisService }],
    });
    service = TestBed.inject(CrisisDetailResolverService);
    getTestScheduler().flush();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
