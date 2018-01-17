json.partial! "api/users/user", user: @user
json.post_count @user.posts.count
json.followers @user.followers.each do |follow|
    json.follower_id follow.follower.id
    json.username follow.follower.username
    json.profile_pic follow.follower.img_url
    json.name follow.follower.name
end
# json.followers @user.followers.map(&:id)
# json.following @user.followees.map(&:id)
json.followees @user.followees.each do |follow|
    json.followee_id follow.followee.id
    json.username follow.followee.username
    json.profile_pic follow.followee.img_url
    json.name follow.followee.name
end
json.follows_count @user.followers.count
json.following_count @user.followees.count
if logged_in?
  json.followed_by_current_user !!@user.followers.find_by(follower_id: current_user.id)
else
  json.followed_by_current_user false
end
json.extract! @user, :id, :username, :img_url
