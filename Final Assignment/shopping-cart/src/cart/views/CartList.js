import React from 'react';
import CartItem from './CartItem';

class CartList extends React.Component {
    render() {
        const {cartItems, products} = this.props;
        const cart = cartItems.map((product) => (
        <CartItem
            cart={product}
            key={product.id}
            products={products}
        />
    ));
    return (
        <div>
            {cart}
        </div>
    );
    }
}

export default CartList;