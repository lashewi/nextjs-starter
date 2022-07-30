import { CounterInitialState } from './counter/reducer';
import { UsersInitialState } from './users/reducer';

export interface RootState {
  counter: CounterInitialState;
  users: UsersInitialState;
}
