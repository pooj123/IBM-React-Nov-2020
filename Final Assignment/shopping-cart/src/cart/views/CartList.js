import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const {cartItems} = props;
    const cartList = cartItems.map((product) => (
        <CartItem
            cartItem={product}
        />
    ));
    return (
        <div>
            {cartList}
        </div>
    );
};

export default CartList;