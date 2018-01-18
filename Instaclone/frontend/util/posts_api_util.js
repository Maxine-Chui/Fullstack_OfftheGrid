export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts',
  })
);

export const fetchPost = (postId) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
);

export const fetchUserPosts = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/posts`
  })
);

export const createPost = (post) => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post},
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`,
  })
);

export const createLike = postId => (
  $.ajax({
    method: 'POST',
    url: `/api/posts/${postId}/likes`,
    data: { post_id: postId }
  })
);

export const deleteLike = postId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}/likes`
  })
);

export const createBookmark = postId => (
  $.ajax({
    method: 'POST',
    url: `/api/posts/${postId}/bookmarks`,
    data: { post_id: postId }
  })
);

export const deleteBookmark = postId => (
  $.ajax({
    method: 'DELETE',
    url:`/api/posts/${postId}/bookmarks`
  })
);
