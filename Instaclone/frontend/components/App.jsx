import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PostIndexContainer from './posts/post_index_container';
import ProfilePostIndexContainer from './profile/profile_post_index_container';
import UserInfoContainer from './profile/user_info_container';
// import ProfilePage from './profile/profile_page';
import PostFormContainer from './posts/post_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Route path="/" component={GreetingContainer} />
    </header>
  <Switch>
    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <AuthRoute exact path="/" component={SessionFormContainer}/>
  </Switch>

    <ProtectedRoute path="/posts" component={PostIndexContainer}/>

    <ProtectedRoute path="/upload" component={PostFormContainer}/>
    <Route path="/users/:userId" component={UserInfoContainer}/>
    <Route path="/users/:userId" component={ProfilePostIndexContainer}/>
  </div>
);
// <Route path="/users/:userId" component={ProfilePage}/>

export default App;
