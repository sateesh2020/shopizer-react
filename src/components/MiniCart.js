import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { SHOP_URLS } from '../config/constants';

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  render() {
    let { cart } = this.props;
    let products = cart.products || [];
    return (
      <Dropdown
        className="cart"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle tag="span" caret>
          <span className="cart_quantity">{cart.quantity}</span>
          <i className="fa fa-shopping-bag" />
          Your Bag {cart.displayTotal}
        </DropdownToggle>
        <DropdownMenu className="cart-list">
          {products.map(product => {
            return (
              <DropdownItem key={product.sku}>
                <a href="#" className="image">
                  <img
                    src="/assets/img/product-img/product-4.jpg"
                    className="cart-thumb"
                    alt=""
                  />
                </a>
                <div className="cart-item-desc">
                  <h6>{product.description.name}</h6>
                  <p>
                    <span>{product.quantity}x -</span>
                    <span className="price">{product.finalPrice}</span>
                  </p>
                </div>
                <span className="dropdown-product-remove">
                  <i className="icon-cross" />
                </span>
              </DropdownItem>
            );
          })}
          <li className="total">
            <span className="pull-right">Total: {cart.displayTotal}</span>
            <Link to={SHOP_URLS.CART} className="btn btn-sm btn-cart">
              Cart
            </Link>
            <Link to={SHOP_URLS.CHECKOUT} className="btn btn-sm btn-checkout">
              Checkout
            </Link>
          </li>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const mapStateToProps = ({ cartStore }) => ({
  cart: cartStore.cart,
});

MiniCart = connect(
  mapStateToProps,
  null
)(MiniCart);

export default MiniCart;
