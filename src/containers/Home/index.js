import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Featured from './Featured';

import { loadFeaturedProducts } from '../../redux/modules/products';

class Home extends Component {
  componentDidMount() {
    this.props.loadFeaturedProducts();
  }
  render() {
    let { featured } = this.props;
    return (
      <section>
        <div id="wrapper">
          <Header />
          <Featured featured={featured} />
          <Footer />
        </div>
      </section>
    );
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
