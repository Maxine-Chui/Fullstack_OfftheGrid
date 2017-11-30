# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Like.destroy_all
Comment.destroy_all

def reset_pk_num
 model_names = [User, Post, Comment, Like, Follow]

 model_names.each do |model_name|
   model_name.destroy_all
 end

 table_names = ["users", "posts", "comments", "likes", "follows"]

 table_names.each do |table_name|
   ActiveRecord::Base.connection.reset_pk_sequence!(table_name)
 end
end
reset_pk_num

#Users
user1 = User.create!(username:"user1", password: "useruser1", email: "user1@user1.com",
  img_url:"http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-3.jpg")
user2 = User.create!(username:"user2", password: "useruser2", email: "user2@user2.com",
  img_url:"https://images.unsplash.com/photo-1508499207119-a3f6cb551c0a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")
user3 = User.create!(username:"user3", password: "useruser3", email: "user3@user3.com",
  img_url:"https://images.unsplash.com/photo-1506259291727-cc30f10b0ab2?auto=format&fit=crop&w=965&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")
user4 = User.create!(username:"user4", password: "useruser4", email: "user4@user4.com",
  img_url:"https://images.unsplash.com/photo-1488643673641-1527a227662e?auto=format&fit=crop&w=1166&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")

#Posts
post1 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464287/andreas-fidler-400356_rjwkgk.jpg",
  location: "Rad Rocks", caption: "Sunday send day", author_id: user1.id)
post2 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464309/greg-rakozy-199745_hx9pch.jpg",
  location: "Somewhere cold", caption: "Ice ice baby", author_id: user1.id)
post3 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464471/johny-goerend-403554_frvhe1.jpg",
  location: "Probably Iceland", caption: "Aurora BoreaLIT", author_id: user2.id)
post4 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464281/jennifer-pallian-146562_qrpzj2.jpg",
  location: "My dreams", caption: "I'm a monster", author_id: user2.id)
post5 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464297/dylan-siebel-166035_gau6oi.jpg",
  location: "Higher than you", caption: "Getting high", author_id: user3.id)
post6 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464281/jennifer-pallian-173715_uoq6n3.jpg",
  author_id: user4.id)
post7 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1511579792/atle-mo-209964_th4thi.jpg",
    location: "Dark Forest", caption: "So much wood", author_id: user1.id)
post8 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1511579794/brooke-lark-158019_l3wuer.jpg",
  location: "Hipster cafe", caption: "Fake food", author_id: user1.id)
post9 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1511579797/kevin-chen-330761_vd4kho.jpg",
    location: "Yosemite", caption: "Where I wanna be", author_id: user1.id)
post10 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1511579792/joshua-reddekopp-217223_blv6v2.jpg",
    location: "Heaven", caption: "Pow pow pow", author_id: user1.id)
post11 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511579792/stephen-leonardi-369720_shdc8s.jpg",
    location: "Firefalls", caption: "You wish you saw this", author_id: user1.id)
post12 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1511808463/krgrexsyhqx2ifh0p1j6.jpg",
    location: "Mars", caption: "I'm an alien", author_id: user1.id)
post13 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_2:3,c_crop/v1511810027/coezaptubxteudqxast7.jpg",
    location: "On rock", caption: "Rock on", author_id: user2.id)
post14 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/ar_6:4,c_crop/v1511810270/jpnvt2cxatuoxtlkboxk.jpg",
    location: "Highest point on earth", caption: "Feeling high", author_id: user2.id)
post15 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511811750/jfbdrg0ciwcebqpfh0sr.jpg",
    location: "In a crevasse", caption: "Burrrr", author_id: user3.id)

#Likes
like1 = Like.create!(post_id: post1.id, user_id: user2.id)
like2 = Like.create!(post_id: post1.id, user_id: user3.id)
like3 = Like.create!(post_id: post2.id, user_id: user2.id)
like4 = Like.create!(post_id: post3.id, user_id: user1.id)
like5 = Like.create!(post_id: post3.id, user_id: user3.id)
like6 = Like.create!(post_id: post4.id, user_id: user1.id)
like7 = Like.create!(post_id: post5.id, user_id: user1.id)

#Comments
comment1 = Comment.create!(body: "Amazing shot!", post_id: post3.id, author_id: user1.id)
comment2 = Comment.create!(body: "Put this in my belly", post_id: post4.id, author_id: user1.id)
comment3 = Comment.create!(body: "This is sickkk", post_id: post5.id, author_id: user1.id)
comment4 = Comment.create!(body: "Trad is rad", post_id: post13.id, author_id: user1.id)
comment5 = Comment.create!(body: "Beast mode!!", post_id: post1.id, author_id: user2.id)
comment6 = Comment.create!(body: "Gnarly!", post_id: post2.id, author_id: user2.id)
comment7 = Comment.create!(body: "Can I be you", post_id: post1.id, author_id: user3.id)
comment8 = Comment.create!(body: "Dude you're ripped", post_id: post1.id, author_id: user4.id)

#Follows
follow1 = Follow.create!(follower_id: user1.id, followee_id: user2.id)
follow2 = Follow.create!(follower_id: user1.id, followee_id: user3.id)
follow3 = Follow.create!(follower_id: user1.id, followee_id: user4.id)
follow4 = Follow.create!(follower_id: user2.id, followee_id: user1.id)
follow5 = Follow.create!(follower_id: user2.id, followee_id: user3.id)
follow6 = Follow.create!(follower_id: user3.id, followee_id: user1.id)
