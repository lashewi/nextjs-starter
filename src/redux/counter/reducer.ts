import { counterActionTypes } from './action';

export interface CounterInitialState {
  count: number;
}

const counterInitialState: CounterInitialState = {
  count: 0,
};

export default function reducer(state = counterInitialState, action: any) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
