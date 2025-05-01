import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';

function ProductPage() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ProductGallery />
      <ProductInfo />
    </div>
  );
}

export default ProductPage;
