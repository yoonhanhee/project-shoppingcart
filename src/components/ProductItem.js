import React from 'react';

// ProductItem 컴포넌트 정의
const ProductItem = ({ product, onAddToCart, onQuantityChange, quantity }) => {
  return (
    <div className="product-card"> {/* 상품 카드를 위한 div */}
      <img src={product.image} alt={product.name} /> {/* 상품 이미지 표시 */}
      <h2>{product.name}</h2> {/* 상품 이름 표시 */}
      <p>가격: {product.price.toLocaleString()}원</p> {/* 상품 가격 표시, 천 단위 구분 */}
      <div className="product-details"> {/* 상품 세부정보를 위한 div */}
        <div className="quantity"> {/* 수량 선택을 위한 div */}
          <label>수량: </label> {/* 수량 레이블 */}
          <select onChange={(e) => onQuantityChange(e, product.id)} value={quantity || 1}> {/* 수량 선택 드롭다운 */}
            {[...Array(10).keys()].map(x => ( // 1부터 10까지의 수량 옵션 생성
              <option key={x + 1} value={x + 1}>{x + 1}</option>
            ))}
          </select>
        </div>
        <button onClick={() => onAddToCart(product)}>카트에 담기</button> {/* 카트에 상품 추가 버튼 */}
      </div>
    </div>
  );
};

export default ProductItem; // ProductItem 컴포넌트를 기본 내보내기
