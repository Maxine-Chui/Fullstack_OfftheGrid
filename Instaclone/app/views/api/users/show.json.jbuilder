json.partial! "api/users/user", user: @user
json.followers @user.followers.map(&:id)
json.following @user.followees.map(&:id)
json.follows_count @user.followers.count
json.following_count @user.followees.count
json.followed_by_current_user !!@user.followers.find_by(follower_id: current_user.id)
# json.extract! @user, :id, :username, :img_url
