import React, {Component} from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import Cards from '../components/cards';
import Single from '../components/cards/single';
import Welcome from '../components/welcome';
import Error404 from '../components/error404';
import Card from '../components/card';

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/cards" component={Cards} />
    <Route path="/cards/:card" component={Single} />
    <Route path="/404" component={Error404} />
    <Redirect from='*' to='/404' />
  </Switch>
)
