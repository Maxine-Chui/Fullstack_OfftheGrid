
json.set! @post.id do
  json.id @post.id
  json.username @post.user.username
  json.author_id @post.user.id
  json.img_url @post.img_url
  json.location @post.location
  json.caption @post.caption
  json.author_photo @post.user.img_url
  json.likes @post.likes.count
  json.liked_by_current_user !!@post.likes.find_by(user_id: current_user.id)
  json.comments @post.comments.map(&:id)
    # json.array! @post.comments do |comment|
    #   json.comment_id comment.id
    #   json.comments post.comments.map(&:id)
      # json.commenter_name comment.commenter.username
      # json.commenter_id comment.author_id
      # json.body comment.body
    # end
  # end
end
