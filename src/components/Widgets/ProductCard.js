import React, { Component } from 'react';
import classnames from 'classnames';
import ScrollAnimation from '../ScrollAnimation';

export default class ProductCard extends Component {
  render() {
    let { product, colClass } = this.props;
    colClass = colClass || 'col-md-4';
    return (
      <ScrollAnimation
        className={classnames(
          'col-xs-12 col-sm-6 single_gallery_item',
          colClass
        )}
        animateIn="fadeInUp"
        animateOnce={true}
      >
        <div className="product-img">
          <img src="/assets/img/product-img/product-3.jpg" alt="" />
          <div className="product-quicview">
            <a href="#" data-toggle="modal" data-target="#quickview">
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
        <div className="product-description">
          <h4 className="product-price">{product.finalPrice}</h4>
          <p>{product.description.name}</p>
          <a href="#" className="add-to-cart-btn">
            ADD TO CART
          </a>
        </div>
      </ScrollAnimation>
    );
  }
}
