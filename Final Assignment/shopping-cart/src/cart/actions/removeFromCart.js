import cartApi from '../services/cartApi';

function removeItemFromCart(product, cartItems){
    return (dispatch) => {
        console.log(product);
        console.log(cartItems);
        console.log("hii")
        
        cartApi
        .remove(product)
            .then(() => {
                const action = { type: "REMOVE_PRODUCT_FROM_CART", payload: product };
                dispatch(action);
            })
    }
}
export default removeItemFromCart;