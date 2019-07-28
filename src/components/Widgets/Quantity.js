import React, { Component } from 'react';

export default class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      min: 1,
      max: 10,
    };
  }
  incrementQuantity = () => {
    let { max, quantity } = this.state;
    if (quantity === max) {
      return;
    }
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  decrementQuantity = () => {
    let { min, quantity } = this.state;
    if (quantity === min) {
      return;
    }
    this.setState({
      quantity: this.state.quantity - 1,
    });
  };
  componentDidMount() {
    let { min, max, quantity } = this.props;
    this.setState({ min, max, quantity });
  }
  render() {
    let { quantity, min, max } = this.state;
    return (
      <div className="quantity">
        <span className="qty-minus" onClick={this.decrementQuantity}>
          <i className="fa fa-minus" aria-hidden="true" />
        </span>
        <input
          type="number"
          className="qty-text"
          id="qty"
          step="1"
          min={min}
          max={max}
          name="quantity"
          readOnly
          value={quantity}
        />
        <span className="qty-plus" onClick={this.incrementQuantity}>
          <i className="fa fa-plus" aria-hidden="true" />
        </span>
      </div>
    );
  }
}

Quantity.defaultProps = {
  min: 1,
  max: 10,
  quantity: 0,
};
