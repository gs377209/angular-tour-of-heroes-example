import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Book } from '../book.model';
import { BookActions } from './book.actions';

export const booksFeatureKey = 'books';

export type State = EntityState<Book>;

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BookActions.addBook, (state, action) =>
    adapter.addOne(action.book, state),
  ),
  on(BookActions.upsertBook, (state, action) =>
    adapter.upsertOne(action.book, state),
  ),
  on(BookActions.addBooks, (state, action) =>
    adapter.addMany(action.books, state),
  ),
  on(BookActions.upsertBooks, (state, action) =>
    adapter.upsertMany(action.books, state),
  ),
  on(BookActions.updateBook, (state, action) =>
    adapter.updateOne(action.book, state),
  ),
  on(BookActions.updateBooks, (state, action) =>
    adapter.updateMany(action.books, state),
  ),
  on(BookActions.deleteBook, (state, action) =>
    adapter.removeOne(action.id, state),
  ),
  on(BookActions.deleteBooks, (state, action) =>
    adapter.removeMany(action.ids, state),
  ),
  on(BookActions.loadBooksSuccess, (state, action) =>
    adapter.setAll(action.books, state),
  ),
  on(BookActions.clearBooks, (state) => adapter.removeAll(state)),
);

export const booksFeature = createFeature({
  name: booksFeatureKey,
  reducer,
  extraSelectors: ({ selectBooksState }) => ({
    ...adapter.getSelectors(selectBooksState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  booksFeature;
