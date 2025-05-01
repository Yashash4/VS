import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => (
  <div className="product-details">
    <h2>Logo Cotton Shine High-Leg Thong Panty</h2>
    <p className="price">₹1,299.00</p>
    <p className="product-id">Product ID: 1124584095D1</p>

    <div className="options">
      <div className="size">
        <label htmlFor="size">Size:</label>
        <select id="size">
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>

      <div className="color">
        <label>Color:</label>
        <div className="color-options">
          <span className="color-swatch" style={{ backgroundColor: '#000' }}></span>
          <span className="color-swatch" style={{ backgroundColor: '#f00' }}></span>
        </div>
      </div>
    </div>

    <button className="add-to-bag">Add to Bag</button>
  </div>
);

export default ProductDetails;
