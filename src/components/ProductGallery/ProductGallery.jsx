import React from 'react';
import './ProductGallery.css';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';

const ProductGallery = () => (
  <div className="product-gallery">
    <img src={product1} alt="Product" className="main-image" />
    <div className="thumbnail-row">
      <img src={product1} alt="Thumbnail 1" />
      <img src={product2} alt="Thumbnail 2" />
    </div>
  </div>
);

export default ProductGallery;
