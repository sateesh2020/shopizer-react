import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { loadManufactures } from '../../redux/modules/manufactures';
import { loadCategories } from '../../redux/modules/categories';
import { loadCartByCode, loadCustomerCart } from '../../redux/modules/cart';
import { CART_ID } from '../../config/constants';

class Shell extends Component {
  componentDidMount() {
    this.props.loadManufactures();
    this.props.loadCategories();
    // TO-DO remove hardcoding and implement guest cart
    this.props.loadCartByCode(CART_ID);
  }
  render() {
    return (
      <section>
        <div id="wrapper">
          <Header />
          <React.Fragment>{this.props.children}</React.Fragment>
          <Footer />
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadManufactures: () => dispatch(loadManufactures()),
  loadCategories: () => dispatch(loadCategories()),
  loadCustomerCart: customerID => dispatch(loadCustomerCart(customerID)),
  loadCartByCode: cartCode => dispatch(loadCartByCode(cartCode)),
});

Shell = connect(
  null,
  mapDispatchToProps
)(Shell);

export default Shell;
