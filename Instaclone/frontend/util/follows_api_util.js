export const fetchFollowers = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows/followers`,
  })
);

export const fetchFollowees = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows/followees`,
  })
);

export const createFollow = (userId, currentUserId) => (
  $.ajax({
    method: 'POST',
    url: `/api/follows`,
    data: { followee_id: userId, follower_id: currentUserId }
  })
);

export const deleteFollow = (followId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followId}`,
  })
);
