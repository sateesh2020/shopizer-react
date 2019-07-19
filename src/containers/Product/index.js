import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProduct, loadRelatedProducts } from '../../redux/modules/products';

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

  render() {
    let { product, related } = this.props;
    return (
      <React.Fragment>
        <Details product={product} />
        <Related products={related} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  product: products.product,
  related: products.related,
});

const mapDispatchToProps = dispatch => ({
  loadProduct: productID => dispatch(loadProduct(productID)),
  loadRelatedProducts: productID => dispatch(loadRelatedProducts(productID)),
});

Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default Product;
