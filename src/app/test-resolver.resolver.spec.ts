import { TestBed } from '@angular/core/testing';

import { TestResolverResolver } from './test-resolver.resolver';

describe('TestResolverResolver', () => {
  let resolver: TestResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TestResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
