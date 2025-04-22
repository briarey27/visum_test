import { postsApi } from './posts/postsSlice';

import { combineReducers, configureStore, createAction } from '@reduxjs/toolkit';

export const resetStore = createAction('resetStore');

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});

const appReducer: typeof rootReducer = (state, action) => {
  if (action.type === resetStore.type) {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(postsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
