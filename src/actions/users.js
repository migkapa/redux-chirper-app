export const RECIEVE_USERS = 'RECIEVE_USERS';

// define action creator here
export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users
  };
}
