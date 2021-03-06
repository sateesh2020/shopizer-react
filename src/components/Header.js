/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu, SocialArea } from './Widgets';
import MiniCart from './MiniCart';
import { SHOP_URLS } from '../config/constants';

class Header extends Component {
  render() {
    let { categories } = this.props;
    return (
      <header className="header_area">
        <div className="top_header_area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-end">
              <div className="col-12 col-lg-7">
                <div className="top_single_area d-flex align-items-center">
                  <div className="top_logo">
                    <Link to={SHOP_URLS.HOME}>
                      <img src="/assets/img/core-img/logo.png" alt="" />
                    </Link>
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
                <div className="header-social-area">
                  <SocialArea />
                </div>
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

const mapStateToProps = ({ categoriesStore }) => ({
  categories: categoriesStore.categories,
});

Header = connect(
  mapStateToProps,
  null
)(Header);

export default Header;
