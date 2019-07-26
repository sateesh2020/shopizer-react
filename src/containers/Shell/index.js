import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { loadManufactures } from '../../redux/modules/manufactures';
import { loadCategories } from '../../redux/modules/categories';
import { loadCartByCode, loadCustomerCart } from '../../redux/modules/cart';

class Shell extends Component {
  componentDidMount() {
    this.props.loadManufactures();
    this.props.loadCategories();
    // TO-DO remove hardcoding and implement guest cart
    this.props.loadCartByCode('6eefd51bc64a432fa55397e075d12910');
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
