import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ProductReview extends Component {
  render() {
    let { rating } = this.props;
    return (
      <div className="single_product_ratings mb-15">
        <i
          className={classnames(
            'fa',
            { 'fa-star': rating >= 1 },
            { 'fa-star-o': rating < 1 }
          )}
          aria-hidden="true"
        />
        <i
          className={classnames(
            'fa',
            { 'fa-star': rating >= 2 },
            { 'fa-star-o': rating < 2 }
          )}
          aria-hidden="true"
        />
        <i
          className={classnames(
            'fa',
            { 'fa-star': rating >= 3 },
            { 'fa-star-o': rating < 3 }
          )}
          aria-hidden="true"
        />
        <i
          className={classnames(
            'fa',
            { 'fa-star': rating >= 4 },
            { 'fa-star-o': rating < 4 }
          )}
          aria-hidden="true"
        />
        <i
          className={classnames(
            'fa',
            { 'fa-star': rating >= 5 },
            { 'fa-star-o': rating < 5 }
          )}
          aria-hidden="true"
        />
      </div>
    );
  }
}

ProductReview.defaultProps = {
  rating: 0,
};

ProductReview.propTypes = {
  rating: PropTypes.number,
};
