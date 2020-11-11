import cartApi from '../services/cartApi';

function checkIfExists(items, id) {
    const found = items.find(el => el.productID === id);
    return found;
  }
  
// func that adds item to cart. Takes product to be added and the entire cart list as args
function addItemToCart(product, cartItems){
    return (dispatch) => {
        // func to check if product already exists in cart items
        const prodExists =  checkIfExists(cartItems, product.id);
        // if product exists, then increment quantity
        const initialElement = {
            id: 0,
            quantity: 0,
            productID: product.id,
        }
        // find the element that already exists and increment
        // undefined -> first value
        // not undefined -> value exists. hence increment quantity
        if (prodExists !== undefined) {
            initialElement.quantity = prodExists.quantity + 1;
        } else {
            initialElement.quantity = 1;
            initialElement.id = 0;
        }
        cartApi
            .save(initialElement).then((res) => {
                console.log("resp", res);
                const action = { type: 'ADD_PRODUCT_TO_CART', payload: res }
                dispatch(action);
            });
    }
}
export default addItemToCart;