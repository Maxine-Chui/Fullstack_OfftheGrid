json.set! @post.id do
  json.username @post.user.username
  json.img_url @post.img_url
  json.location @post.location
  json.caption @post.caption
  json.author_photo @post.user.img_url
end
