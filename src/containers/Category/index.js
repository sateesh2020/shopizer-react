import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Products from './Products';

import { loadProducts } from '../../redux/modules/products';

class Category extends Component {
  componentDidMount() {
    let categoryId = this.props.location.id;
    if (!categoryId) {
      this.props.history.goBack();
    }
    this.props.loadProducts({
      category: categoryId,
    });
  }
  render() {
    let { products } = this.props;
    console.log(products);
    return (
      <section>
        <div id="wrapper">
          <Header />
          <Products products={products} />
          <Footer />
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products: products.products,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: filter => dispatch(loadProducts(filter)),
});

Category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

export default Category;
