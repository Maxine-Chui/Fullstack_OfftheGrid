import { connect } from 'react-redux';
import UserInfo from './user_info';
import { fetchUser, createFollow, deleteFollow } from '../../actions/user_actions';
import {
  fetchFollowers,
  fetchFollowees,
  // createFollow,
  // deleteFollow
} from '../../actions/follows_actions';

const mapStateToProps = (state) => {
  return {
    user: state.entities.user,
    numPosts: state.entities.user.post_count,
    // userId: state.entities.user.id,
    currentUser: state.session.currentUser,
    numFollows: state.entities.user.follows_count,
    numFollowing: state.entities.user.following_count,
    followed: state.entities.user.followed_by_current_user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (authorId) => dispatch(fetchUser(authorId)),
    // fetchFollowers: (userId) => dispatch(fetchFollowers(userId)),
    // fetchFollowees: (userId) => dispatch(fetchFollowees(userId)),
    createFollow: (userId, currentUserId) => dispatch(createFollow(userId, currentUserId)),
    deleteFollow: (userId, currentUserId) => dispatch(deleteFollow(userId, currentUserId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
