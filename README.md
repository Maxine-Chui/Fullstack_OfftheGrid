# Fullstack_OfftheGrid

## Summary


OfftheGrid is a photo sharing web application inspired by Instagram to display and share users' photos of the outdoors and other activities they enjoy. OfftheGrid is a React/Redux app with a Rails backend. This product was developed and styled in 10 days with addition features coming in the near future.

Visit the live site here: https://fsp-offthegrid.herokuapp.com


### Features
* User authentication
![alt-text](http://res.cloudinary.com/dqhhpt0sj/image/upload/v1512172417/Screen_Shot_2017-12-01_at_3.49.37_PM_x1xkmf.png)
* Photo feed and Photo show
![alt-text](http://res.cloudinary.com/dqhhpt0sj/image/upload/v1512172417/Screen_Shot_2017-12-01_at_3.50.44_PM_lydshp.png)
* User Profiles
![alt-text](http://res.cloudinary.com/dqhhpt0sj/image/upload/v1512172417/Screen_Shot_2017-12-01_at_3.51.05_PM_fikehk.png)
* Likes, Comments, and Follows


### Technologies


* React-Redux for frontend development
    ```
    class LikesAndComments extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          author: this.props.currentUser.username,
          body: ''
        };
      this.toggleLike = this.toggleLike.bind(this);
      this.addComment = this.addComment.bind(this);
      }
    ```
    * Webpack
    * ES6 Javascript

* Ruby on Rails serves the backend
    * RESTful API endpoints
    ```
    export const createFollow = (userId, currentUserId) => (
      $.ajax({
        method: 'POST',
        url: `/api/follows`,
        data: { followee_id: userId, follower_id: currentUserId }
      })
    );
    ```
    * PostgreSQL as database
    * Jbuilder views
    * BCrypt to hash passwords and protect user privacy
    * ActiveRecord for facilitating and persisting data
    * Jbuilder views
    ```
    has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

    has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Comment

    has_many :followees,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

    ```
* Heroku for hosting the application
* Cloudinary to upload and host content


### Upcoming Features


* Followers and following index on users' profile pages
* Bookmarking photos to save to profile
* Hashtags
* Search for users, locations, hashtags
* Infinite scroll
* Google maps for photo location
