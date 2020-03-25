export const RECIEVE_TWEETS = 'RECIEVE_TWEETS';

// define action creator here
export function recieveUsers(tweets) {
  return {
    type: RECIEVE_TWEETS,
    tweets
  };
}
