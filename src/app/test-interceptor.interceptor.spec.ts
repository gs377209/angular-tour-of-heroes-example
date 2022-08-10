import { TestBed } from '@angular/core/testing';

import { TestInterceptorInterceptor } from './test-interceptor.interceptor';

describe('TestInterceptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TestInterceptorInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: TestInterceptorInterceptor = TestBed.inject(
      TestInterceptorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
