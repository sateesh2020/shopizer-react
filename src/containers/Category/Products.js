import React, { Component } from 'react';
import { ProductCard } from '../../components/Widgets';

export default class Products extends Component {
  render() {
    let { products } = this.props;
    return (
      <section className="new_arrivals_area section_padding_100_0 clearfix">
        <div className="container">
          <div className="row shop-new-arrivals">
            {products.map(product => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
