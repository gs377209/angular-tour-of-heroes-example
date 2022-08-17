import { TestBed } from '@angular/core/testing';

import { Crisis } from './crisis';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CrisisService } from './crisis.service';
import { asyncData } from 'src/testing/async-observable-helpers';

describe('CrisisDetailResolverService', () => {
  let service: CrisisDetailResolverService;
  let expectedCrisis: Crisis;

  beforeEach(() => {
    expectedCrisis = { id: 1, name: 'Test Crisis' };
    const crisisService = jasmine.createSpyObj('CrisisService', ['getCrisis']);
    crisisService.getCrisis.and.returnValue(asyncData(expectedCrisis));

    TestBed.configureTestingModule({
      providers: [{ provide: CrisisService, useValue: crisisService }],
    });
    service = TestBed.inject(CrisisDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
