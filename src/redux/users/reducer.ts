import { usersActionTypes } from './action';

export interface UsersInitialState {
  users: string[];
}

const usersInitialState: UsersInitialState = {
  users: ['Charles', 'Hamilton'],
};

export default function reducer(state = usersInitialState, action: any) {
  switch (action.type) {
    case usersActionTypes.ADD_USER: {
      return { ...state, users: [...state.users, action.user] };
    }
    default:
      return state;
  }
}
