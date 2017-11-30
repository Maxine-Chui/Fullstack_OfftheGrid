import * as APIFollowsUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWEES = 'RECEIVE_FOLLOWEES';
// export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
// export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollowers = (followers) => ({
  type: RECEIVE_FOLLOWERS,
  followers
});

const receiveFollowees = (followees) => ({
  type: RECEIVE_FOLLOWEES,
  followees
});

// const receiveFollow = (follow) => ({
//   type: RECEIVE_FOLLOW,
//   follow
// });
//
// const removeFollow= (follow) => ({
//   type: REMOVE_FOLLOW,
//   follow
// });

export const fetchFollowers = userId => dispatch => (
  APIFollowsUtil.fetchFollowers(userId).then(followers => dispatch(receiveFollowers(followers)))
);

export const fetchFollowees = userId => dispatch => (
  APIFollowsUtil.fetchFollowees(userId).then(followees => dispatch(receiveFollowees(followees)))
);

// export const createFollow = (userId, currentUserId) => dispatch => (
//   APIFollowsUtil.createFollow(userId, currentUserId).then(follow => dispatch(receiveFollow(follow)))
// );
//
// export const deleteFollow = (userId, currentUserId) => dispatch => (
//   APIFollowsUtil.deleteFollow(userId, currentUserId).then(follow => dispatch(removeFollow(follow)))
// );
