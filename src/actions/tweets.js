export const RECIEVE_TWEETS = 'RECIEVE_TWEETS';

// define action creator here
export function recieveTweets(tweets) {
  return {
    type: RECIEVE_TWEETS,
    tweets
  };
}
