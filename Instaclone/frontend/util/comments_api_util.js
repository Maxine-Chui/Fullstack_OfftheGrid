export const fetchPostComments = (postId) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/comments`,
  })
);

export const fetchAllComments = () => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`,
  })
);

export const createComment = (postId, comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: { post_id: postId, comment }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
);
