import React from 'react';
import CartList from '../components/CartList';
import { Link } from 'react-router-dom'; // Link import 추가

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>SHOPPING CART</h1>
      <CartList />
      <Link to="/" className="back-link">BACK TO PRODUCT LIST</Link> {/* 메인 페이지로 돌아가는 링크 추가 */}
    </div>
  );
};

export default CartPage;