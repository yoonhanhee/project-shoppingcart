import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // CartContext를 가져와 장바구니 상태 관리

const CheckoutButton = () => {
  const { dispatch } = useContext(CartContext); // CartContext에서 dispatch 함수를 가져옴

  // 결제 처리 함수
  const handleCheckout = () => {
    alert('결제가 완료되었습니다!'); // 결제 완료 알림 표시
    dispatch({ type: 'CLEAR_CART' }); // CLEAR_CART 액션을 디스패치하여 장바구니를 비움
  };

  return (
    <button onClick={handleCheckout}>결제하기</button> // 버튼 클릭 시 handleCheckout 함수 호출
  );
};

export default CheckoutButton; // CheckoutButton 컴포넌트를 기본 내보내기
