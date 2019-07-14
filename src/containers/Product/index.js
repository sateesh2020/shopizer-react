import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ProductCarousel,
  ProductReview,
  ProductAccordion,
} from '../../components/Widgets';

import { loadProduct } from '../../redux/modules/products';

const items = [
  {
    src: '/assets/img/product-img/product-4.jpg',
  },
  {
    src: '/assets/img/product-img/product-5.jpg',
  },
  {
    src: '/assets/img/product-img/product-3.jpg',
  },
  {
    src: '/assets/img/product-img/product-2.jpg',
  },
  {
    src: '/assets/img/product-img/product-1.jpg',
  },
];
class Product extends Component {
  componentDidMount() {
    let productID = this.props.location.id;
    if (!productID) {
      productID = 50;
      //this.props.history.goBack();
    }
    this.props.loadProduct(productID);
  }
  componentDidUpdate(prevProps) {
    let productID = this.props.location.id;
    if (productID && productID !== prevProps.location.id) {
      this.props.loadProduct(productID);
    }
  }

  render() {
    let { product } = this.props;
    let description = product.description || {};
    return (
      <section className="single_product_details_area section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="single_product_thumb">
                <ProductCarousel items={items} />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="single_product_desc">
                <h4 className="title">{description.name}</h4>

                <h4 className="price">
                  {product.discounted && (
                    <span className="stike">{product.originalPrice}</span>
                  )}
                  {product.finalPrice}
                </h4>
                {product.available ? (
                  <p className="available">Available: {product.quantity}</p>
                ) : (
                  <p className="available">Currently Un Available</p>
                )}
                <ProductReview rating={product.rating} />
                <div className="cart clearfix mb-15 d-flex">
                  <button
                    type="submit"
                    name="addtocart"
                    className="btn cart-submit d-block"
                  >
                    Add to cart
                  </button>
                </div>
                <p className="font-75">{'SKU : ' + product.sku}</p>
                <ProductAccordion description={description.description} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  product: products.product,
});

const mapDispatchToProps = dispatch => ({
  loadProduct: productID => dispatch(loadProduct(productID)),
});

Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default Product;
