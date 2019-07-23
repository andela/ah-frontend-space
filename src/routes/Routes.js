import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import Home from '../components/HomePage/Home';
import SignInPage from '../containers/signIn/SignInPage';
import notFound from '../components/notfound';
import Profile from '../containers/profile/index';
import Hello from '../containers/Hello';
import NavBar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';
import SignupForm from '../containers/SignupForm';
import ConfirmEmailPage from '../containers/passwordReset/ConfirmEmailPage';
import ResetPasswordPage from '../containers/passwordReset/ResetPasswordPage';
import ArticleDetails from '../components/HomePage/HomeDetail';
import { SignOut } from '../utils/SignOut';

import editContainer from '../containers/profile/EditProfile';
import UpdateArticlePage from '../containers/article/UpdateArticlePage';

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Footer />
          <Switch>
            <Route exact="true" path="/" component={Home} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/hello" component={Hello} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/confirm-email" component={ConfirmEmailPage} />
            <Route path="/reset-password" component={ResetPasswordPage} />
            <Route path="/signout" component={SignOut} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/editprofile" component={editContainer} />
            <Route path="/edit-article" component={UpdateArticlePage} />
            <Route path="/:slug" component={ArticleDetails} />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
