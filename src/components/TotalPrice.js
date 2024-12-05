import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const TotalPrice = () => {
const { state } = useContext(CartContext);
const totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

return (
<h2>총 가격: {totalPrice.toLocaleString()}원</h2>
);
};

export default TotalPrice;