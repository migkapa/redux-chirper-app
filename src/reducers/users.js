import { RECIEVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
  // init empty state
  switch (action.type) {
    case RECIEVE_USERS:
      // an object that does not change state but creates a new object buy destructing state
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}
