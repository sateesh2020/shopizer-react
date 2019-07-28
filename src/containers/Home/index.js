import React, { Component } from 'react';
import { connect } from 'react-redux';

import Featured from './Featured';

import { loadFeaturedProducts } from '../../redux/modules/products';

class Home extends Component {
  componentDidMount() {
    this.props.loadFeaturedProducts();
  }
  render() {
    let { featured } = this.props;
    return <Featured featured={featured} />;
  }
}

const mapStateToProps = ({ productsStore }) => ({
  featured: productsStore.featured,
});

const mapDispatchToProps = dispatch => ({
  loadFeaturedProducts: () => dispatch(loadFeaturedProducts()),
});

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Home;
