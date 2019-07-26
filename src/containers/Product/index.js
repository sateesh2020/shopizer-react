import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProduct, loadRelatedProducts } from '../../redux/modules/products';
import { updateProductsInCart } from '../../redux/modules/cart';
import Details from './Details';
import Related from './Related';

class Product extends Component {
  componentDidMount() {
    let productID = this.props.location.id;
    if (!productID) {
      productID = 50;
      //this.props.history.goBack();
    }
    this.props.loadProduct(productID);
    this.props.loadRelatedProducts(productID);
  }
  componentDidUpdate(prevProps) {
    let productID = this.props.location.id;
    if (productID && productID !== prevProps.location.id) {
      this.props.loadProduct(productID);
      this.props.loadRelatedProducts(productID);
    }
  }
  addToCart = product => {
    let { id } = product;
    // TO-DO remove hardcoding and implement guest cart
    let request = {
      productID: id,
      cartCode: '6eefd51bc64a432fa55397e075d12910',
      quantity: 1,
    };
    this.props.updateProductsInCart(request);
  };
  render() {
    let { product, related } = this.props;
    return (
      <React.Fragment>
        <Details product={product} addToCart={this.addToCart} />
        <Related products={related} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ productsStore }) => ({
  product: productsStore.product,
  related: productsStore.related,
});

const mapDispatchToProps = dispatch => ({
  loadProduct: productID => dispatch(loadProduct(productID)),
  loadRelatedProducts: productID => dispatch(loadRelatedProducts(productID)),
  updateProductsInCart: request => dispatch(updateProductsInCart(request)),
});

Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default Product;
