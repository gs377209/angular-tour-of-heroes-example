import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  standalone: false,
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
}
