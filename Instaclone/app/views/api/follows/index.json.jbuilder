@follows.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :follower_id, :followee_id
    json.following follow.followee.username
    json.follows follow.follower.username
  end
end
