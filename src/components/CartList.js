import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // CartContext 가져오기
import CartItem from './CartItem'; // 장바구니 아이템 컴포넌트 가져오기
import TotalPrice from './TotalPrice'; // 총액 컴포넌트 가져오기
import CheckoutButton from './CheckoutButton'; // 체크아웃 버튼 컴포넌트 가져오기

const CartList = () => {
  const { state, dispatch } = useContext(CartContext); // CartContext에서 상태와 dispatch 함수 가져오기

  // 아이템 제거 핸들러
  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id }); // REMOVE_ITEM 액션 디스패치
  };

  // 수량 변경 핸들러
  const handleQuantityChange = (e, id) => {
    const quantity = parseInt(e.target.value); // 선택된 수량을 정수로 변환
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }); // UPDATE_QUANTITY 액션 디스패치
  };

  return (
    <div>
      {state.items.length === 0 ? ( // 장바구니 아이템이 없을 경우
        <p>장바구니가 비어있습니다.</p> // 비어있다는 메시지 표시
      ) : (
        <div className="product-grid"> {/* 카드 레이아웃을 위한 div 추가 */}
          {state.items.map(item => ( // 장바구니 아이템 목록 렌더링
            <CartItem 
              key={item.id} // 각 아이템의 고유 키
              item={item} // 아이템 정보 전달
              onRemove={handleRemove} // 제거 핸들러 전달
              onQuantityChange={handleQuantityChange} // 수량 변경 핸들러 전달
            />
          ))}
        </div>
      )}
      <TotalPrice /> {/* 총액 컴포넌트 렌더링 */}
      <CheckoutButton /> {/* 체크아웃 버튼 컴포넌트 렌더링 */}
    </div>
  );
};

export default CartList; // CartList 컴포넌트를 기본 내보내기
