@posts.each do |post|
  # json.extract! post, :id, :img_url, :location, :author_id, :caption
  json.set! post.id do
    json.extract! post, :id, :img_url, :location, :caption
    json.username post.user.username
    json.author_id post.user.id
    json.author_photo post.user.img_url
    json.likes post.likes.count
    json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)

    json.set! :comments do
      json.array! post.comments do |comment|
          json.comment_id comment.id
          json.commenter_name comment.commenter.username
          json.commenter_id comment.author_id
          json.body comment.body
      end
    end
  end
end
