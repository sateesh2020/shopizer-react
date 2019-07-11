import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { SHOP_URLS } from '../../config/constants';

import SubMenuItem from './SubMenuItem';

export default class Menu extends Component {
  renderMenuItems = () => {
    const { menuItems } = this.props;
    return menuItems.map(menuItem => {
      if (menuItem['children'].length > 0) {
        return (
          <NavItem key={menuItem.code}>
            <SubMenuItem
              caption={menuItem.description.name}
              menuItems={menuItem.children}
              categoryId={menuItem.id}
              friendlyUrl={menuItem.description.friendlyUrl}
            />
          </NavItem>
        );
      }

      return (
        <NavItem key={menuItem.code}>
          <Link
            to={{
              pathname:
                SHOP_URLS.CATEGORY + '/' + menuItem.description.friendlyUrl,
              id: menuItem.id,
            }}
            className="nav-link"
          >
            {menuItem.description.name}
          </Link>
        </NavItem>
      );
    });
  };

  render() {
    return <Nav>{this.renderMenuItems()}</Nav>;
  }
}
