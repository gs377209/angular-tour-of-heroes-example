import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { BookService } from '../book.service';
import { BookActions } from './book.actions';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      concatMap(() =>
        this.bookService.getBooks().pipe(
          map((data) => BookActions.loadBooksSuccess({ books: data })),
          catchError((error) => of(BookActions.loadBooksFailure({ error }))),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private bookService: BookService,
  ) {}
}
