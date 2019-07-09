import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom';

import Home from './containers/Home';
import Category from './containers/Category';

import history from './history';

import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/home" name="Home Page" component={Home} />
        <Route
          exact
          path="/category"
          name="Category Page"
          component={Category}
        />
        <Redirect from="" to="/home" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
