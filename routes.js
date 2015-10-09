/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import NotFound from './handlers/NotFound';
import AppBase from './handlers/Base';
import Home from'./handlers/Home';
import App from './handlers/App';

var routes = (
  <Route path="/" handler={AppBase} >
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute handler={NotFound} />
    <Route path="/app" handler={App} />
  </Route>
);

export default routes;
