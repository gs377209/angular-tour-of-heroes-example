import { Data, ParamMap, Params, convertToParamMap } from '@angular/router';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();
  private querySubject = new ReplaySubject<ParamMap>();
  private fragmentSubject = new ReplaySubject<string | null>();
  private dataSubject = new ReplaySubject<Data>();

  constructor(
    initialParams?: Params,
    initialQueryParams?: Params,
    initialFragment?: string | null,
    initialData?: Data,
  ) {
    this.setParamMap(initialParams);
    this.setQueryParamMap(initialQueryParams);
    this.setFragment(initialFragment);
    this.setData(initialData);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();

  /** Set the paramMap observable's next value */
  setParamMap(params: Params = {}) {
    this.subject.next(convertToParamMap(params));
  }

  /** The mock queryParamMap observable */
  readonly queryParamMap = this.querySubject.asObservable();

  /** Set the queryParamMap observable's next value */
  setQueryParamMap(params: Params = {}) {
    this.querySubject.next(convertToParamMap(params));
  }

  /** The mock fragment observable */
  readonly fragment = this.fragmentSubject.asObservable();

  /** Set the fragment observable's next value */
  setFragment(fragment: string | null = null) {
    this.fragmentSubject.next(fragment);
  }

  /** The mock data observable */
  readonly data = this.dataSubject.asObservable();

  /** Set the data observable's next value */
  setData(data: Data = {}) {
    this.dataSubject.next(data);
  }
}
