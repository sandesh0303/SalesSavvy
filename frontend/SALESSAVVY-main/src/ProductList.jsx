import React from 'react';
import './assets/styles.css';

export function ProductList({ products, onAddToCart }) {

  if (!products || products.length === 0) {
    return <p className="no-products">No products available.</p>;
  }

  const getImageByProductId = (productId) => {
    switch (productId) {
      case 1:
        return "/blue-shirt.jpg";
      case 2:
        return "/black-pant.jpg";
      case 3:
        return "/watch.jpg";
      case 4:
        return "/samsung-galaxy.jpg";
      case 5:
        return "/charger.jpg";
      default:
        return "/shipped.jpg";
    }
  };

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.product_id} className="product-card">
            <img
              src={getImageByProductId(product.product_id)}
              alt={product.name}
              className="product-image"
              onError={(e) => {
                e.target.src = "/shipped.jpg";
              }}
            />

            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>

              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product.product_id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}