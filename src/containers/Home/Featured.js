import React, { Component } from 'react';
import { ProductCard } from '../../components/Widgets';

export default class Featured extends Component {
  render() {
    let { featured } = this.props;
    return (
      <section className="new_arrivals_area section_padding_100_0 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading text-center">
                <h2>Featured Items</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row shop-new-arrivals">
            {featured.map(product => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
