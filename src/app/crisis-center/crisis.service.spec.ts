import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CrisisService } from './crisis.service';

describe('CrisisService', () => {
  let service: CrisisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    TestBed.inject(HttpClient);
    TestBed.inject(HttpTestingController);
    service = TestBed.inject(CrisisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
