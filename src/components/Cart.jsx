import React from 'react';
import OneProduct from './OneProduct';

const Cart = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="empty-cart-overlay">
        <div className="empty-cart-message">
          <p>
            Korpa je prazna. Kliknite na <a href="/">Moja prodavnica</a> da dodate proizvode u korpu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h3>Ovi proizvodi su u korpi:</h3>
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} inCart={0} />
      ))}
    </div>
  );
};

export default Cart;
