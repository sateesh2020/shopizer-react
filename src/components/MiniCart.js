import React, { Component } from 'react';

export default class MiniCart extends Component {
  render() {
    return (
      <div className="cart">
        <a href="#" id="header-cart-btn" target="_blank">
          <span className="cart_quantity">2</span>
          <i className="fa fa-shopping-bag" />
          Your Bag $20
        </a>
        <ul className="cart-list">
          <li>
            <a href="#" className="image">
              <img
                src="assets/img/product-img/product-10.jpg"
                className="cart-thumb"
                alt=""
              />
            </a>
            <div className="cart-item-desc">
              <h6>
                <a href="#">Women&apos;s Fashion</a>
              </h6>
              <p>
                <span>1x -</span>
                <span className="price">$10</span>
              </p>
            </div>
            <span className="dropdown-product-remove">
              <i className="icon-cross" />
            </span>
          </li>
          <li>
            <a href="#" className="image">
              <img
                src="assets/img/product-img/product-11.jpg"
                className="cart-thumb"
                alt=""
              />
            </a>
            <div className="cart-item-desc">
              <h6>
                <a href="#">Women&apos;s Fashion</a>
              </h6>
              <p>
                <span>1x -</span>
                <span className="price">$10</span>
              </p>
            </div>
            <span className="dropdown-product-remove">
              <i className="icon-cross" />
            </span>
          </li>
          <li className="total">
            <span className="pull-right">Total: $20.00</span>
            <a href="cart.html" className="btn btn-sm btn-cart">
              Cart
            </a>
            <a href="checkout-1.html" className="btn btn-sm btn-checkout">
              Checkout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
