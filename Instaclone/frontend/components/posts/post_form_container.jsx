import { connect } from 'react-redux';
import { createPost } from '../../actions/posts_actions';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createPost: (post) => dispatch(createPost(post)).then(() => history.push('/posts'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
