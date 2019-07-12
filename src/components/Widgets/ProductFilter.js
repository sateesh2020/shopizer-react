import React, { Component } from 'react';
import classnames from 'classnames';

import { PRICE_FILTERS as priceFilters, FILTERS } from '../../config/constants';

export default class ProductFilter extends Component {
  render() {
    let { categories, filters, filter } = this.props;
    return (
      <div className="shop_sidebar_area">
        <div className="widget catagory mb-50">
          <div className="nav-side-menu">
            <h6 className="widget-title">Categories</h6>
            <div className="menu-list">
              <ul className="menu-content">
                <li
                  className={classnames({ active: !filters[FILTERS.CATEGORY] })}
                  onClick={() => filter(FILTERS.CATEGORY, null)}
                >
                  <div className="link">All</div>
                </li>
                {categories.map(category => {
                  return (
                    <li
                      key={category.code}
                      className={classnames({
                        active: filters[FILTERS.CATEGORY] == category.code,
                      })}
                      onClick={() => filter(FILTERS.CATEGORY, category.code)}
                    >
                      <div className="link">{category.description.name}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="price mb-50">
          <h6 className="widget-title">Filter by Price</h6>
          <div className="menu-list">
            <ul className="menu-content">
              <li
                className={classnames({ active: !filters[FILTERS.PRICE] })}
                onClick={() => filter(FILTERS.PRICE, null)}
              >
                <div className="link">All</div>
              </li>
              {priceFilters.map(price => {
                return (
                  <li
                    key={price.id}
                    className={classnames({
                      active: filters[FILTERS.PRICE] == price.id,
                    })}
                    onClick={() => filter(FILTERS.PRICE, price.id)}
                  >
                    <div className="link">
                      {price.max ? (
                        <span>{price.min + ' - ' + price.max}</span>
                      ) : (
                        <span>{'Above ' + price.min}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
