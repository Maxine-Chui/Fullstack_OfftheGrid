# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
user1 = User.create(username:"user1", password: "useruser1", email: "user1@user1.com")
user2 = User.create(username:"user2", password: "useruser2", email: "user2@user2.com")
user3 = User.create(username:"user3", password: "useruser3", email: "user3@user3.com")
user4 = User.create(username:"user4", password: "useruser4", email: "user4@user4.com")

#Posts
post1 = Post.create!(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511464287/andreas-fidler-400356_rjwkgk.jpg",
  location: "Rad Rocks", caption: "Rock on", author_id: user1.id)
post2 = Post.create(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511464309/greg-rakozy-199745_hx9pch.jpg",
  location: "Somewhere cold", caption: "Ice ice baby", author_id: user1.id)
post3 = Post.create(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511464471/johny-goerend-403554_frvhe1.jpg",
  location: "Probably Iceland", caption: "Aurora BoreaLIT", author_id: user2.id)
post4 = Post.create(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511464281/jennifer-pallian-146562_qrpzj2.jpg",
  location: "My dreams", caption: "I'm a monster", author_id: user2.id)
post5 = Post.create(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511464297/dylan-siebel-166035_gau6oi.jpg",
  location: "Higher than you", caption: "Getting high", author_id: user3.id)
post6 = Post.create(img_url:"http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511464281/jennifer-pallian-173715_uoq6n3.jpg",
  author_id: user4.id)
