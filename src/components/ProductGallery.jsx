import React from 'react';
import './ProductGallery.css';
import productImage from '../assets/product1.jpg';

function ProductGallery() {
  return (
    <div className="product-gallery">
      <img src={productImage} alt="Product" className="main-image" />
    </div>
  );
}

export default ProductGallery;
