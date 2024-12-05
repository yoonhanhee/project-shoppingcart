import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; // CartContext 가져오기
import ProductItem from './ProductItem'; // ProductItem 컴포넌트 가져오기

// 상품 목록 정의
const PRODUCTS = [
  { id: 1, name: '뿌까', price: 10000, image: 'https://i.pinimg.com/1200x/b4/57/55/b45755fe06187abc9a920d0db7910258.jpg' },
  { id: 2, name: '호랑이 비슷한것', price: 20000, image: 'https://i.pinimg.com/1200x/95/ff/50/95ff50d748106da5971b96b7a9e59213.jpg' },
  { id: 3, name: '웨어 울프', price: 15000, image: 'https://i.pinimg.com/1200x/8c/0e/4b/8c0e4be4457bc379d362b1dd1031b6cd.jpg' },
  { id: 4, name: '귤아찌', price: 25000, image: 'https://i.pinimg.com/1200x/0c/6c/8c/0c6c8c8f66a07496a042aab336f44bcb.jpg' }, // 새로운 상품 추가
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext); // CartContext에서 dispatch 함수 가져오기
  const [quantities, setQuantities] = useState({}); // 상품 수량을 저장할 상태

  // 카트에 상품 추가 핸들러
  const handleAddToCart = (product) => {
    const quantity = parseInt(quantities[product.id]) || 1; // 선택된 수량 가져오기, 기본값은 1
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } }); // ADD_ITEM 액션 디스패치
    alert(`${product.name}이(가) 추가되었습니다!`); // 상품 추가 알림
  };

  // 수량 변경 핸들러
  const handleQuantityChange = (e, id) => {
    setQuantities({ ...quantities, [id]: e.target.value }); // 선택된 수량 업데이트
  };

  return (
    <div className="product-grid"> {/* 상품 카드 레이아웃을 위한 div */}
      {PRODUCTS.map(product => ( // 각 상품을 ProductItem 컴포넌트로 렌더링
        <ProductItem 
          key={product.id} // 각 상품의 고유 키
          product={product} // 상품 정보 전달
          onAddToCart={handleAddToCart} // 카트 추가 핸들러 전달
          onQuantityChange={handleQuantityChange} // 수량 변경 핸들러 전달
          quantity={quantities[product.id]} // 현재 수량 전달
        />
      ))}
    </div>
  );
};

export default ProductList; // ProductList 컴포넌트를 기본 내보내기
