import React from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom'; // Link import 추가

const MainPage = () => {
  return (
    <div>
      <h1>PRODUCT LIST</h1>
      <ProductList />
      <Link to="/cart" className="cart-link">GO TO CART</Link> 
    </div>
  );
};

export default MainPage;