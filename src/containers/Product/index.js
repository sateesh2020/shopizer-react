import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProduct, loadRelatedProducts } from '../../redux/modules/products';
import { updateProductsInCustomerCart } from '../../redux/modules/cart';
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
      customerID: 1,
      quantity: 1,
    };
    this.props.updateProductsInCustomerCart(request);
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
  updateProductsInCustomerCart: request =>
    dispatch(updateProductsInCustomerCart(request)),
});

Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default Product;
