import React from 'react';
import { Route } from 'react-router';
import DiscussionPage from './pages/discussionPage';
import ProfilePage from './pages/profilePage';

export default (
  <Route>
    <Route path="/discussion/:discussionName" component={DiscussionPage} />
    <Route path="/profile/:userName" component={ProfilePage} />
  </Route>
);