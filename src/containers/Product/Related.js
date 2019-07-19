import React, { Component } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import { ProductCard } from '../../components/Widgets';

function Arrows(props) {
  const { className, style, onClick, forward } = props;
  console.log(props);
  return (
    <span
      className={classnames(
        className,
        'fa',
        { 'fa-chevron-circle-right': forward },
        { 'fa-chevron-circle-left': !forward }
      )}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Arrows forward={true} />,
  prevArrow: <Arrows forward={false} />,
};

export default class Related extends Component {
  render() {
    let { products } = this.props;
    return (
      <React.Fragment>
        {products.length > 0 && (
          <section className="you_may_like_area clearfix">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section_heading text-center">
                    <h2>Related Products</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container related-items">
              <Slider {...settings}>
                {products.map(product => {
                  return (
                    <ProductCard
                      key={product.sku}
                      product={product}
                      colClass="col-md-12"
                    />
                  );
                })}
              </Slider>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}
