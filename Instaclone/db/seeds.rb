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
user1 = User.create!(username:"No One", password: "useruser", email: "user1@user1.com", blurb: "Not today.", name: "Arya Stark",
  img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1512169709/landscape-1512041436-arya-stark_owznab.jpg")
user2 = User.create!(username:"King in the North", password: "useruser", email: "user2@user2.com", blurb: "Who's my daddy? I’m in love with my auntie", name: "Jon Snow",
  img_url:"https://resizing.flixster.com/oNIe1GP62oBAGhvpCRGiKx-UZa8=/300x300/v1.cDsxNDA5MDkzNztqOzE3NTc4OzEyMDA7NDY3OzU0Mg")
user3 = User.create!(username:"Imp", password: "useruser", email: "user3@user3.com", blurb: "I drink and I know things", name: "Tyrion Lannister",
  img_url:"https://hdqwalls.com/wallpapers/tyrion-lannister-game-of-thrones-new.jpg")
user4 = User.create!(username:"Kingslayer", password: "useruser", email: "user4@user4.com", blurb: "Can you lend me a hand?", name: "Jaime Lannister",
  img_url:"https://pbs.twimg.com/profile_images/853288399293120514/kQU6rncY.jpg")
user5 = User.create!(username:"Eddard", password: "useruser", email:"user5@user5.com", blurb: "RIP", name: "Ned Stark",
  img_url:"https://media.lifeposts.com/site_media/media/image/a3f84ecd-6462-403a-be06-3b5f297836af.jpg")
user6 = User.create!(username:"The Queen", password: "useruser", email: "user6@user6.com", blurb: "No shame.", name: "Cersei Lannister",
  img_url:"https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest/scale-to-width-down/323?cb=20170828071355")
user7 = User.create!(username:"Lady of Winterfell", password: "useruser", email: "user7@user7.com", blurb: "Winter is here. I’m the captain now.", name: "Sansa Stark",
  img_url:"https://vignette.wikia.nocookie.net/gameofthrones/images/6/6a/S7_Sansa_Stark_Profil.jpg/revision/latest/scale-to-width-down/310?cb=20170531101147&path-prefix=de")
user8 = User.create!(username:"Khaleesi", password: "useruser", email: "user8@user8.com", blurb: "The First of Her Name, The Unburnt, Queen of the Andals, Breaker of Chains and Mother of Dragons", name: "Daenerys Targaryen",
  img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1512169653/8161305_orig_i2byd9.jpg")
user9 = User.create!(username:"Three Eyed Raven", password: "useruser", email: "user9@user9.com", blurb: "Warging > walking", name: "Bran Stark",
  img_url:"https://digitalspyuk.cdnds.net/17/14/768x408/gallery-1491600567-got11.jpg")
user10 = User.create!(username:"Reek", password: "useruser", email: "user10@user10.com", blurb: "My least favorite food is sausage.", name: "Theon Greyjoy",
  img_url:"https://upload.wikimedia.org/wikipedia/en/5/51/Theon_Greyjoy-Alfie_Allen.jpg")
user11 = User.create!(username:"Hodor", password: "useruser", email: "user11@user11.com", blurb: "But I’m really a DJ", name: "Hodor Holdthedoor",
  img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1512169689/hodor_dqcpun.jpg")


#Posts
post1 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464287/andreas-fidler-400356_rjwkgk.jpg",
  location: "Rad Rocks", caption: "Sunday send day", author_id: user1.id)
post2 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464309/greg-rakozy-199745_hx9pch.jpg",
  location: "Somewhere cold", caption: "Ice ice baby", author_id: user1.id)
post3 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464471/johny-goerend-403554_frvhe1.jpg",
  location: "Probably Iceland", caption: "Aurora BoreaLIT", author_id: user2.id)
post4 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464281/jennifer-pallian-146562_qrpzj2.jpg",
  location: "My dreams", caption: "I'm a monster", author_id: user2.id)
post5 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464297/dylan-siebel-166035_gau6oi.jpg",
  location: "Higher than you", caption: "Getting high", author_id: user3.id)
post6 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511464281/jennifer-pallian-173715_uoq6n3.jpg",
  author_id: user4.id)
post7 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1511579792/atle-mo-209964_th4thi.jpg",
    location: "Dark Forest", caption: "So much wood", author_id: user1.id)
post8 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1511579794/brooke-lark-158019_l3wuer.jpg",
  location: "Hipster cafe", caption: "Fake food", author_id: user1.id)
post9 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1511579797/kevin-chen-330761_vd4kho.jpg",
    location: "Yosemite", caption: "Where I wanna be", author_id: user1.id)
post10 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1511579792/joshua-reddekopp-217223_blv6v2.jpg",
    location: "Heaven", caption: "Pow pow pow", author_id: user1.id)
post11 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511579792/stephen-leonardi-369720_shdc8s.jpg",
    location: "Firefalls", caption: "You wish you saw this", author_id: user1.id)
post12 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1511808463/krgrexsyhqx2ifh0p1j6.jpg",
    location: "Mars", caption: "I'm an alien", author_id: user1.id)
post13 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1511810027/coezaptubxteudqxast7.jpg",
    location: "On rock", caption: "Rock on", author_id: user2.id)
post14 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1511810270/jpnvt2cxatuoxtlkboxk.jpg",
    location: "Highest point on earth", caption: "Feeling high", author_id: user2.id)
post15 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1511811750/jfbdrg0ciwcebqpfh0sr.jpg",
    location: "In a crevasse", caption: "Burrrr", author_id: user3.id)
post16 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1512154344/enis-yavuz-189633_hbpgak.jpg",
    location: "A glacier lagoon in Iceland", caption: "I’m a puffy orange marshmallow", author_id: user5.id)
post17 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1512154336/etienne-bosiger-367964_vh8oli.jpg",
    location: "Somewhere out there", caption: "To the tippy top!", author_id: user6.id)
post18 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1512154338/greg-rakozy-207199_mb88ri.jpg",
    location: "Cabin in the woods", caption: "Not a castle but not too shabby", author_id: user7.id)
post19 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1512154336/holly-mandarich-326680_c3ibcn.jpg",
    location: "Freedom", caption: "Khal Drogo would’ve loved this place", author_id: user8.id)
post20 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_3:4,c_crop/v1512154344/tom-barrett-329280_ssb5tx.jpg",
    location: "Outta this world", caption: "I see…something", author_id: user9.id)
post21 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1512154346/tommy-lisbin-373139_exntzr.jpg",
    location: "In a crack", caption: "Hand jammin", author_id: user10.id)
post22 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1512154350/trevor-cole-389921_k0pdoi.jpg",
    location: "King’s Road", caption: "Things don’t end well on this road", author_id: user11.id)
post23 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1512154338/kate-56791_dxybu6.jpg",
    location: "", caption: "My hair flip is better than yours", author_id: user3.id)
post24 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1512154339/mahir-uysal-229897_jktj9k.jpg",
    location: "Yosemite", caption: "It’s not that cold tho", author_id: user1.id)
post25 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1512154345/zelle-duda-373004_nxjwr3.jpg",
    location: "Statue of Liberty", caption: "Lady Liberty or Lady of Winterfell?", author_id: user7.id)
post26 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1512154340/mariusz-prusaczyk-190811_tllziy.jpg",
    location: "The Wall", caption: "Before the fire", author_id: user2.id)
post27 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1512154335/iler-stoe-358786_igep3l.jpg",
    location: "Beyond the Wall", caption: "Dem white walkers", author_id: user2.id)
post28 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_4:3,c_crop/v1512154344/wynand-van-poortvliet-64523_qyv0g5.jpg",
    location: "The Vale", caption: "Moon door’s pretty cool", author_id: user3.id)
post29 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/ar_1:1,c_crop/v1512154342/zak-boca-292600_wcqvbr.jpg",
    location: "Off the grid", caption: "Running away from my sister", author_id: user4.id)
post30 = Post.create!(img_url:"https://res.cloudinary.com/dqhhpt0sj/image/upload/v1512156015/tommy-lisbin-316755_w0oszg.jpg",
    location: "", caption: "Don’t fall don’t fall don’t fall", author_id: user3.id)


#Likes
like1 = Like.create!(post_id: post1.id, user_id: user2.id)
like2 = Like.create!(post_id: post1.id, user_id: user3.id)
like3 = Like.create!(post_id: post2.id, user_id: user2.id)
like4 = Like.create!(post_id: post3.id, user_id: user1.id)
like5 = Like.create!(post_id: post3.id, user_id: user3.id)
like6 = Like.create!(post_id: post4.id, user_id: user1.id)
like7 = Like.create!(post_id: post5.id, user_id: user1.id)
like8 = Like.create!(post_id: post6.id, user_id: user1.id)
like9 = Like.create!(post_id: post7.id, user_id: user2.id)
like10 = Like.create!(post_id: post8.id, user_id: user3.id)
like11= Like.create!(post_id: post9.id, user_id: user4.id)
like12 = Like.create!(post_id: post10.id, user_id: user5.id)
like13 = Like.create!(post_id: post11.id, user_id: user6.id)
like14 = Like.create!(post_id: post12.id, user_id: user7.id)
like15 = Like.create!(post_id: post13.id, user_id: user8.id)
like16 = Like.create!(post_id: post14.id, user_id: user9.id)
like17 = Like.create!(post_id: post15.id, user_id: user10.id)
like18 = Like.create!(post_id: post16.id, user_id: user11.id)
like19 = Like.create!(post_id: post17.id, user_id: user2.id)
like20 = Like.create!(post_id: post18.id, user_id: user1.id)
like21 = Like.create!(post_id: post19.id, user_id: user1.id)
like22 = Like.create!(post_id: post20.id, user_id: user1.id)
like23 = Like.create!(post_id: post21.id, user_id: user1.id)
like24 = Like.create!(post_id: post22.id, user_id: user1.id)
like25 = Like.create!(post_id: post23.id, user_id: user1.id)

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
follow7 = Follow.create!(follower_id: user4.id, followee_id: user1.id)
follow8 = Follow.create!(follower_id: user5.id, followee_id: user1.id)
follow9 = Follow.create!(follower_id: user6.id, followee_id: user1.id)
follow10 = Follow.create!(follower_id: user7.id, followee_id: user1.id)
follow11 = Follow.create!(follower_id: user8.id, followee_id: user1.id)
follow12 = Follow.create!(follower_id: user9.id, followee_id: user1.id)
follow13 = Follow.create!(follower_id: user10.id, followee_id: user1.id)
follow14 = Follow.create!(follower_id: user11.id, followee_id: user1.id)
follow15 = Follow.create!(follower_id: user1.id, followee_id: user5.id)
follow16 = Follow.create!(follower_id: user1.id, followee_id: user6.id)
follow17 = Follow.create!(follower_id: user1.id, followee_id: user7.id)
follow18 = Follow.create!(follower_id: user2.id, followee_id: user8.id)
follow19 = Follow.create!(follower_id: user3.id, followee_id: user7.id)
follow20 = Follow.create!(follower_id: user4.id, followee_id: user6.id)
