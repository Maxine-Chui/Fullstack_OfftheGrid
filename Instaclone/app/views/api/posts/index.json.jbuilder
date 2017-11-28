@posts.each do |post|
  # json.extract! post, :id, :img_url, :location, :author_id, :caption
  json.set! post.id do
    json.username post.user.username
    json.author_id post.user.id
    json.img_url post.img_url
    json.location post.location
    json.caption post.caption
    json.author_photo post.user.img_url
    json.likes post.likes.count
    json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)
  end
end
