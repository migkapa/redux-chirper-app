import { RECIEVE_TWEETS } from '../actions/tweets';

export default function tweets(state = {}, action) {
  // init empty state
  switch (action.type) {
    case RECIEVE_TWEETS:
      // an object that does not change state but creates a new object buy destructing state
      return {
        ...state,
        ...action.tweets
      };
    default:
      return state;
  }
}
