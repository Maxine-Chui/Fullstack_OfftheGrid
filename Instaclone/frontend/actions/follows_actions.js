import * as APIFollowsUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWEES = 'RECEIVE_FOLLOWEES';

const receiveFollowers = (followers) => ({
  type: RECEIVE_FOLLOWERS,
  followers
});

const receiveFollowees = (followees) => ({
  type: RECEIVE_FOLLOWEES,
  followees
});

export const fetchFollowers = userId => dispatch => (
  APIFollowsUtil.fetchFollowers(userId).then(followers => dispatch(receiveFollowers(followers)))
);

export const fetchFollowees = userId => dispatch => (
  APIFollowsUtil.fetchFollowees(userId).then(followees => dispatch(receiveFollowees(followees)))
);
