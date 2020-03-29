import { RECIEVE_TWEETS, TOGGLE_TWEET, NEW_TWEET } from '../actions/tweets';

export default function tweets(state = {}, action) {
  // init empty state
  switch (action.type) {
    case RECIEVE_TWEETS:
      // an object that does not change state but creates a new object buy destructing state
      return {
        ...state,
        ...action.tweets
      };

    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(
                  userId => userId !== action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser])
        }
      };

    case NEW_TWEET:
      const { tweet } = action;
      let replyingTo = {};

      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyTo].replies.concat([tweet.id])
          }
        };
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo
      };
    default:
      return state;
  }
}
