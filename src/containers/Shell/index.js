import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Shell extends Component {
  componentDidMount() {
    console.log('In Shell Page');
  }
  render() {
    return (
      <section>
        <div id="wrapper">
          <Header />
          <React.Fragment>{this.props.children}</React.Fragment>
          <Footer />
        </div>
      </section>
    );
  }
}
