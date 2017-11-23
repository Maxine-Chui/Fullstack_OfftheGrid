import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  let processForm;
  if (formType === 'login' || formType === '') {
    processForm = login;
  } else {
    processForm = signup;
  }
  // const processForm = (formType === 'login' || '/') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);