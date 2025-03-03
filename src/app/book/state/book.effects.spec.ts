import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { BookService } from '../book.service';
import { BookEffects } from './book.effects';

describe('BookEffects', () => {
  const actions$: Observable<unknown> = of();
  let effects: BookEffects;
  let bookService: BookService;

  beforeEach(() => {
    bookService = jasmine.createSpyObj<BookService>(['getBooks']);

    TestBed.configureTestingModule({
      providers: [
        BookEffects,
        provideMockActions(() => actions$),
        { provide: BookService, useValue: bookService },
      ],
    });

    effects = TestBed.inject(BookEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
