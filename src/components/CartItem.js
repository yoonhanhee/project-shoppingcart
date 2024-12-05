import React from 'react';

// CartItem 컴포넌트 정의
const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <tr> {/* 테이블의 행을 나타냄 */}
      <td>{item.name}</td> {/* 상품 이름 표시 */}
      <td>{item.price.toLocaleString()}원</td> {/* 상품 가격 표시, 천 단위 구분 */}
      <td>
        <select value={item.quantity} onChange={(e) => onQuantityChange(e, item.id)}> {/* 수량 선택 드롭다운 */}
          {[...Array(10).keys()].map(x => ( // 1부터 10까지의 수량 옵션 생성
            <option key={x+1} value={x+1}>{x+1}</option>
          ))}
        </select>
      </td>
      <td>{(item.price * item.quantity).toLocaleString()}원</td> {/* 총 가격 표시 (가격 * 수량) */}
      <td>
        <button onClick={() => onRemove(item.id)}>삭제</button> {/* 삭제 버튼 클릭 시 onRemove 호출 */}
      </td>
    </tr>
  );
};

export default CartItem; // CartItem 컴포넌트를 기본 내보내기
