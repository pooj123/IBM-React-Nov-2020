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
// function addItemToCart(productToCart, cart){
//     return function(dispatch){
//         console.log('additemtocart func', productToCart);
//         console.log('cart in additemtocart func', cart);
//         cartApi
//             .save(productToCart, cart)
//             .then(product => {
//                 console.log('new prod',product)
//                 const action = { type: "ADD_PRODUCT_TO_CART", payload: {product, cart} };
//                 dispatch(action);
//             })
//     };
// }

function checkIfExists(arr, id) {
    const found = arr.find(el => el.productID === id);
    // if (found) {
    //     return true;
    // } else {
    //     return false;
    // }
    return found;
  }
  

function addItemToCart(productID, productList, cartItems){
    return (dispatch) => {
        console.log(productList);
        // func to check if product already exists in cart items
        const prodExists =  checkIfExists(cartItems, productID);
        // if product exists, then increment quantity
        const initialElement = {
            id: 0,
            quantity: 0,
            productID: productList.id,
            present: false,
        }
        // find the element that already exists and increment
        // undefined -> only one value (does not exist)
        // object -> value exists
        if (prodExists == undefined) {
            initialElement.quantity = 1;
            initialElement.id = 0;
            initialElement.present = true;
        } else {
            initialElement.quantity = prodExists.quantity + 1;
            initialElement.id = productList.id;
            initialElement.present = true; 
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