import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookEffects } from './state/book.effects';
import { booksFeatureKey, reducer } from './state/book.reducer';

@NgModule({
  declarations: [BooksPageComponent, BookListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(booksFeatureKey, reducer),
    EffectsModule.forFeature([BookEffects]),
    BookRoutingModule,
  ],
})
export class BookModule {}
