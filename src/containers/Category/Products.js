import React, { Component } from 'react';
import { ProductCard } from '../../components/Widgets';

export default class Products extends Component {
  render() {
    let { products } = this.props;
    return (
      <section className="shop_grid_product_area">
        <div className="row">
          {products.map(product => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                colClass="col-md-4"
              />
            );
          })}
        </div>
      </section>
    );
  }
}
