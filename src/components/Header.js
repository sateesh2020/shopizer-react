/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Menu, SocialArea } from './Widgets';
import MiniCart from './MiniCart';

import { loadCategories } from '../redux/modules/categories';

class Header extends Component {
  componentDidMount() {
    let { loadCategories } = this.props;
    loadCategories();
  }

  render() {
    let { categories } = this.props;
    console.log(categories);
    return (
      <header className="header_area">
        <div className="top_header_area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-end">
              <div className="col-12 col-lg-7">
                <div className="top_single_area d-flex align-items-center">
                  <div className="top_logo">
                    <a href="#">
                      <img src="assets/img/core-img/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="header-cart-menu d-flex align-items-center ml-auto">
                    <MiniCart />
                    <div className="header-right-side-menu ml-15">
                      <a href="#" id="sideMenuBtn">
                        <i className="fa fa-bars" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_header_area">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 d-md-flex justify-content-between">
                <SocialArea />
                <div className="main-menu-area">
                  <nav className="navbar navbar-expand-lg align-items-start">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#shop-navbar"
                      aria-controls="shop-navbar"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon">
                        <i className="fa fa-bars" />
                      </span>
                    </button>

                    <div
                      className="collapse navbar-collapse align-items-start collapse"
                      id="shop-navbar"
                    >
                      <Menu menuItems={categories} />
                    </div>
                  </nav>
                </div>
                <div className="help-line">
                  <a href="tel:+346573556778">
                    <i className="ti-headphone-alt" />
                    +34 657 3556 778
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories,
});

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
});

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Header;
