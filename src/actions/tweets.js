import { saveLikeToggle } from '../utils/api';
import { saveTweet } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECIEVE_TWEETS = 'RECIEVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const NEW_TWEET = 'NEW_TWEET';

// define action creator here
export function recieveTweets(tweets) {
  return {
    type: RECIEVE_TWEETS,
    tweets
  };
}

export function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  };
}

export function handleToggleTweet(info) {
  return dispatch => {
    saveLikeToggle(info)
      .then(() => {
        dispatch(toggleTweet(info));
      })
      .catch(e => {
        console.warn('Error in handleToggleTweet: ', e);
        alert('There was an error liking the tweet. Try again.');
      });
  };
}

export function newTweet(tweet) {
  return {
    type: NEW_TWEET,
    tweet
  };
}

export function handleNewTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then(tweet => dispatch(newTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}
