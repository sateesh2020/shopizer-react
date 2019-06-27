import React, { Component } from 'react';
import { NavLink, Nav, NavItem } from 'reactstrap';

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
            />
          </NavItem>
        );
      }

      return (
        <NavItem key={menuItem.code}>
          <NavLink>{menuItem.description.name}</NavLink>
        </NavItem>
      );
    });
  };

  render() {
    return <Nav>{this.renderMenuItems()}</Nav>;
  }
}
