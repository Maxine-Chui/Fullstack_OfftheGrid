import { connect } from 'react-redux';
import UserInfo from './user_info';
import { fetchUser } from '../../actions/user_actions';
import {
  fetchFollowers,
  fetchFollowees,
  createFollow,
  deleteFollow
} from '../../actions/follows_actions';

const mapStateToProps = (state) => {
  return {
    user: state.entities.user,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (authorId) => dispatch(fetchUser(authorId)),
    fetchFollowers: (userId) => dispatch(fetchFollowers(userId)),
    fetchFollowees: (userId) => dispatch(fetchFollowees(userId)),
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
