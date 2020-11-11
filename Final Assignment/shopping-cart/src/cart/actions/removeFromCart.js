import cartApi from '../services/cartApi';

function removeItemFromCart(product, cartItems){
    return (dispatch) => {
        const prod = cartItems.find((item) => item.productID === product.id);
        console.log(prod);

        if (prod.quantity == 1) {
            prod.quantity = 0;
            console.log('prod quan', prod);
            cartApi
                .remove(prod)
                    .then((response) => {
                        console.log('remove res', response)
                        const action = { type: "REMOVE_PRODUCT_FROM_CART", payload: product.productID };
                        dispatch(action);
                        const action1 = { type: "REMOVE_PRODUCT_FROM_REDUX", payload: prod.productID };
                        dispatch(action1);
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
                    console.log("resp", res);
                    const action = { type: 'ADD_PRODUCT_TO_CART', payload: res }
                    dispatch(action);
                });
        }
        
        
    }
}
export default removeItemFromCart;