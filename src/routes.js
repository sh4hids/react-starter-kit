import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ListPage } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies" component={ListPage} />
    <Route exact path="/movies/latest" component={ListPage} />
    <Route exact path="/movies/popular" component={ListPage} />
  </Switch>
);

export default Routes;
