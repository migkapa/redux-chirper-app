import { getInitialData } from '../utils/api';
import { recieveTweets } from '../actions/tweets';
import { recieveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

// a thunk action creator must be used
export default handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
