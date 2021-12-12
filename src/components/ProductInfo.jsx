import React from 'react';
import "../styles/ProductInfo.scss";

const ProductInfo = () => {
  return (
    <>
      <img src="./assets/img/product-card.jpg" alt="bike" />
      <div className="ProductInfo">
        <p>$35.00</p>
        <p>Bike</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum vitae vero, obcaecati aliquam dolores blanditiis expedita explicabo ad tempora illo? Fugit vero, consectetur quis quaerat fuga qui quidem quas.</p>
        <button className="primary-button add-to-cart-button">
          <img src="./assets/icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductInfo;