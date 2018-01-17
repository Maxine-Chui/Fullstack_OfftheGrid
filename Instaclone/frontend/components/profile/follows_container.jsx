import { connect } from 'react-redux';
import {
  createFollow,
  deleteFollow,
  fetchFollowers,
  fetchFollowees
} from '../../actions/user_actions';
import FollowsShow from './follows_show';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.entities.user,
    userId: state.entities.user.id,
    // followed: state.entities.user.followed_by_current_user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // fetchFollowers: (userId) => dispatch(fetchFollowers(userId)),
    // fetchFollowees: (userId) => dispatch(fetchFollowees(userId)),
    // createFollow: (userId, currentUserId) => dispatch(createFollow(userId, currentUserId)),
    // deleteFollow: (userId, currentUserId) => dispatch(deleteFollow(userId, currentUserId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowsShow);
