import React from 'react';
import "../styles/ShoppingCartItem.scss"

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img src="./assets/img/product-card.jpg" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30.00</p>
    </div>
  );
}

export default ShoppingCartItem;