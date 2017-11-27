import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';
import { clearPosts } from '../../actions/posts_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, { location, history }) => ({
  logout: () => dispatch(logout()).then(dispatch(clearPosts()).then(() => history.push('/login')))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
