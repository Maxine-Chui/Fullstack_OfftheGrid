@posts.each do |post|
  # json.extract! post, :id, :img_url, :location, :author_id, :caption
  json.set! post.id do
    json.username post.user.username
    json.img_url post.img_url
    json.location post.location
    json.caption post.caption
  end
end
