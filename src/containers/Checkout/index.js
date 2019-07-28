import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Address } from '../../components/Widgets';

class Checkout extends Component {
  render() {
    let { cart } = this.props;
    let products = cart.products || [];
    return (
      <div className="checkout_area section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="checkout_details_area mt-50 clearfix">
                <div className="cart-page-heading">
                  <h5>Billing Address</h5>
                </div>
                <Address />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
              <div className="order-details-confirmation">
                <div className="cart-page-heading">
                  <h5>Your Order</h5>
                  <p>The Details</p>
                </div>

                <ul className="order-details-form mb-4">
                  <li>
                    <span>Product</span> <span>Total</span>
                  </li>
                  {products.map(product => {
                    return (
                      <li key={product.sku}>
                        <span>{product.description.name}</span>
                        <span>{product.displaySubTotal}</span>
                      </li>
                    );
                  })}
                  <li>
                    <span>Subtotal</span>
                    <span>{cart.displaySubTotal}</span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <span>Free</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>{cart.displayTotal}</span>
                  </li>
                </ul>

                <div id="accordion" role="tablist" className="mb-4">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h6 className="mb-0">
                        <a
                          data-toggle="collapse"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <i className="fa fa-circle-o mr-3" />
                          Paypal
                        </a>
                      </h6>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin pharetra tempor so dales. Phasellus
                          sagittis auctor gravida. Integ er bibendum sodales
                          arcu id te mpus. Ut consectetur lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h6 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="fa fa-circle-o mr-3" />
                          cash on delievery
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo quis in veritatis officia inventore,
                          tempore provident dignissimos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                      <h6 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i className="fa fa-circle-o mr-3" />
                          credit card
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Esse quo sint repudiandae suscipit ab soluta
                          delectus voluptate, vero vitae
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingFour">
                      <h6 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          <i className="fa fa-circle-o mr-3" />
                          direct bank transfer
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est cum autem eveniet saepe fugit, impedit
                          magni.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="btn shop-checkout-btn">
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cartStore }) => ({
  cart: cartStore.cart,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
