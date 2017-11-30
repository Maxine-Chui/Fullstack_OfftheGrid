import * as APIUserUtil from '../util/user_api_util';

// import * as APIFollowsUtil from '../util/follows_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

// export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
// export const RECEIVE_FOLLOWEES = 'RECEIVE_FOLLOWEES';
// export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';


const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// const receiveFollowers = (followers) => ({
//   type: RECEIVE_FOLLOWERS,
//   followers
// });
//
// const receiveFollowees = (followees) => ({
//   type: RECEIVE_FOLLOWEES,
//   followees
// });

// const removeFollow= (follow) => ({
//   type: REMOVE_FOLLOW,
//   follow
// });

export const fetchUser = (userId) => dispatch => (
  APIUserUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

// export const fetchFollowers = userId => dispatch => (
//   APIFollowsUtil.fetchFollowers(userId).then(followers => dispatch(receiveFollowers(followers)))
// );
//
// export const fetchFollowees = userId => dispatch => (
//   APIFollowsUtil.fetchFollowees(userId).then(followees => dispatch(receiveFollowees(followees)))
// );
//
// export const createFollow = (userId, currentUserId) => dispatch => (
//   APIFollowsUtil.createFollow(userId, currentUserId).then(user => dispatch(receiveUser(user)))
// );
//
// export const deleteFollow = followId => dispatch => (
//   APIFollowsUtil.deleteFollow(followId).then(user => dispatch(receiveUser(user)))
// );
