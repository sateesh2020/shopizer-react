import React, { Component } from 'react';
import { connect } from 'react-redux';

import Featured from './Featured';

import { loadFeaturedProducts } from '../../redux/modules/products';

class Home extends Component {
  componentDidMount() {
    console.log('In Home');
    this.props.loadFeaturedProducts();
  }
  render() {
    let { featured } = this.props;
    return <Featured featured={featured} />;
  }
}

const mapStateToProps = ({ products }) => ({
  featured: products.featured,
});

const mapDispatchToProps = dispatch => ({
  loadFeaturedProducts: () => dispatch(loadFeaturedProducts()),
});

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Home;
