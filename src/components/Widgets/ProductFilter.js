import React, { Component } from 'react';

export default class ProductFilter extends Component {
  render() {
    let { categories } = this.props;
    console.log(categories);
    return (
      <div className="shop_sidebar_area">
        <div className="widget catagory mb-50">
          <div className="nav-side-menu">
            <h6 className="mb-0">Categories</h6>
            <div className="menu-list">
              <ul className="menu-content">
                {categories.map(category => {
                  return (
                    <li key={category.code}>
                      <a className="link">{category.description.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="price mb-50">
          <h6 className="widget-title mb-30">Filter by Price</h6>
          <div className="menu-list">
            <ul className="menu-content">
              <li>
                <div className="link">10$ - 100$</div>
              </li>
              <li>
                <div className="link">100$ - 200$</div>
              </li>
              <li>
                <div className="link">200$ - 300$</div>
              </li>
              <li>
                <div className="link">Above 300$</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
