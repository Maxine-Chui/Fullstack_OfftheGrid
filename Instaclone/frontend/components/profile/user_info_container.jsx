import { connect } from 'react-redux';
import UserInfo from './user_info';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    user: state.entities.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (authorId) => dispatch(fetchUser(authorId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
