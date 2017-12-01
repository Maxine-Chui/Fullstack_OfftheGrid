@posts.each do |post|
  # json.extract! post, :id, :img_url, :location, :author_id, :caption
  json.set! post.id do
    json.extract! post, :id, :img_url, :location, :caption
    json.username post.user.username
    json.author_id post.user.id
    json.author_photo post.user.img_url
    json.likes post.likes.count
    if logged_in?
      json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)
    else
      json.liked_by_current_user false
    end
    json.comments post.comments.map(&:id)
    json.age time_ago_in_words(post.created_at)
          # json.comment_id comment.id
          # json.commenter_name comment.commenter.username
          # json.commenter_id comment.author_id
          # json.body comment.body
      # end
    # end
  end
end
