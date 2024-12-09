import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookActions } from '../state/book.actions';
import { selectAll } from '../state/book.reducer';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  standalone: false,
})
export class BooksPageComponent implements OnInit {
  books$ = this.store.select(selectAll);
  id = 1;

  onAdd(bookId: string) {
    this.store.dispatch(
      BookActions.addBook({
        book: {
          id: bookId + this.id,
          volumeInfo: { authors: ['add'], title: 'add' },
        },
      }),
    );
    this.id++;
  }

  onRemove(bookId: string) {
    this.store.dispatch(BookActions.deleteBook({ id: bookId }));
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(BookActions.loadBooks());
  }
}
