import * as APIUserUtil from '../util/user_api_util';

import * as APIFollowsUtil from '../util/follows_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (userId) => dispatch => (
  APIUserUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

export const createFollow = (userId, currentUserId) => dispatch => (
  APIFollowsUtil.createFollow(userId, currentUserId).then(user => dispatch(receiveUser(user)))
);

export const deleteFollow = (userId, currentUserId) => dispatch => (
  APIFollowsUtil.deleteFollow(userId, currentUserId).then(user => dispatch(receiveUser(user)))
);
