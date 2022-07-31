import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { counterReducer } from '../features/counter';
import { quoteReducer } from '../features/quote';

const combinedReducer = combineReducers({
  counter: counterReducer,
  quote: quoteReducer,
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
