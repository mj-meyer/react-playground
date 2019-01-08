import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      statu: PropTypes.strings,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { name, image, desc, status, price } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <div className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name} <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add to Order' : 'Sold out!'}
        </button>
      </div>
    );
  }
}

export default Fish;
