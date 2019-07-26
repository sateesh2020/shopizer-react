import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Shell from './containers/Shell';
import Home from './containers/Home';
import Category from './containers/Category';
import Product from './containers/Product';
import Cart from './containers/Cart';

import history from './history';
import { SHOP_URLS } from './config/constants';

import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Shell>
          <Route
            component={({ match }) => (
              <React.Fragment>
                <Route exact path={SHOP_URLS.HOME} component={Home} />
                <Route
                  exact
                  path={SHOP_URLS.CATEGORY + '/:category'}
                  component={Category}
                />
                <Route
                  exact
                  path={SHOP_URLS.PRODUCT + '/:product'}
                  component={Product}
                />
                <Route exact path={SHOP_URLS.CART} component={Cart} />
              </React.Fragment>
            )}
          />
        </Shell>
        <Redirect from="" to={SHOP_URLS.HOME} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
