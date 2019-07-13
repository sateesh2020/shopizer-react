import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { SHOP_URLS } from '../../config/constants';

export default class SubMenuItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    const { caption, menuItems, categoryId, friendlyUrl } = this.props;
    return (
      <Dropdown
        className="nav-link"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle tag="span" caret>
          <Link
            to={{
              pathname: SHOP_URLS.CATEGORY + '/' + friendlyUrl,
              id: categoryId,
            }}
          >
            {caption}
          </Link>
        </DropdownToggle>
        <DropdownMenu>
          {menuItems.map(item => {
            return (
              <DropdownItem key={item.code}>
                <Link
                  to={{
                    pathname:
                      SHOP_URLS.CATEGORY + '/' + item.description.friendlyUrl,
                    id: item.id,
                  }}
                  className="nav-link"
                >
                  {item.description.name}
                </Link>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
