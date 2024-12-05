import React, { createContext, useReducer, useEffect } from 'react';

// CartContext 생성
export const CartContext = createContext();

// 초기 상태 정의: 로컬 스토리지에서 장바구니 아이템을 가져옴
const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || []
};

// 장바구니 상태를 관리하는 리듀서 함수
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': // 아이템 추가
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // 이미 존재하는 아이템이면 수량만 증가
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        // 새로운 아이템이면 리스트에 추가
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    case 'REMOVE_ITEM': // 아이템 제거
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_QUANTITY': // 수량 업데이트
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'CLEAR_CART': // 장바구니 비우기
      return {
        ...state,
        items: []
      };
    default: // 기본 상태 반환
      return state;
  }
};

// CartProvider 컴포넌트 정의
export const CartProvider = ({ children }) => {
  // useReducer를 사용하여 상태와 dispatch 함수 생성
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 상태가 변경될 때마다 로컬 스토리지에 아이템 저장
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  // CartContext.Provider를 통해 상태와 dispatch를 제공
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
