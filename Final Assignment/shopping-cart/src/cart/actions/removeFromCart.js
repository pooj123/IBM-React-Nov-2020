import cartApi from '../services/cartApi';

// func to remove item from cart
function removeItemFromCart(product, cartItems){
    return (dispatch) => {
        const prod = cartItems.find((item) => item.productID === product.id);

        if (prod.quantity == 1) {
            // if quantity is 1, then after removing it from server, it needs to be removed from redux
            // hence we call REMOVE_PRODUCT_FROM_REDUX action
            prod.quantity = 0;
            cartApi
                .remove(prod)
                    .then((response) => {
                        console.log('remove res', response)
                        const action = { type: "REMOVE_PRODUCT_FROM_CART", payload: product.productID };
                        dispatch(action);
                        const actionRem = { type: "REMOVE_PRODUCT_FROM_REDUX", payload: prod.productID };
                        dispatch(actionRem);
                    })

        } else {
            const initialElement = {
                id: 0,
                quantity: 0,
                productID: product.id,
                present: false,
            }          
            initialElement.quantity = prod.quantity - 1;

            cartApi
                .save(initialElement).then((res) => {
                    const action = { type: 'ADD_PRODUCT_TO_CART', payload: res }
                    dispatch(action);
                });
        }
        
        
    }
}
export default removeItemFromCart;