import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createReducer,
} from '@ngrx/store';

interface AppState {
  appName: string;
}

export const initialState: AppState = { appName: 'tour' };

const appReducer: ActionReducer<AppState> = createReducer(initialState);

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};

// console.log all actions
export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [debug] : [];
