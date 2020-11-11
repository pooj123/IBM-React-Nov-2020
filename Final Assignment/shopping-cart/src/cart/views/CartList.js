import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const {cartItems, products} = props;
    const cartList = cartItems.map((product) => (
        <CartItem
            cart={product}
            key={product.id}
            products={products}
        />
    ));
    return (
        <div>
            {cartList}
        </div>
    );
};

export default CartList;