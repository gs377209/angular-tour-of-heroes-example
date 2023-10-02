import { Action } from '@ngrx/store';
import { initialState, reducer } from './book.reducer';

describe('Book Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
