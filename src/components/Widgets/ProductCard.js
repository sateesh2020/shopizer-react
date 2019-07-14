import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import ScrollAnimation from '../ScrollAnimation';

import { SHOP_URLS } from '../../config/constants';

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
        <Link
          to={{
            pathname: SHOP_URLS.PRODUCT + '/' + product.description.friendlyUrl,
            id: product.id,
          }}
        >
          <div className="product-img">
            <img src="/assets/img/product-img/product-3.jpg" alt="" />
            <div className="product-quicview" />
          </div>
          <div className="product-description">
            <h4 className="product-price">{product.finalPrice}</h4>

            {product.description.name}
          </div>
        </Link>
      </ScrollAnimation>
    );
  }
}
