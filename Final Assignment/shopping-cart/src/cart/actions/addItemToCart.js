import cartApi from '../services/cartApi';
export function getAllCartItemsFromServer() {
    return function(dispatch) {
        let allCart=[];
        cartApi
            .getAll()
            .then((resp) => {
                allCart = resp;
                const action = { type: "PRODUCT_LIST_IN_CART", payload: allCart };
                dispatch(action);
            });
    }
}

function checkIfExists(arr, id) {
    const found = arr.find(el => el.productID === id);
    return found;
  }
  

function addItemToCart(product, cartItems){
    return (dispatch) => {
        console.log(product);
        // func to check if product already exists in cart items
        const prodExists =  checkIfExists(cartItems, product.id);
        // if product exists, then increment quantity
        const initialElement = {
            id: 0,
            quantity: 0,
            productID: product.id,
        }
        // find the element that already exists and increment
        // undefined -> only one value (does not exist)
        // object -> value exists
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