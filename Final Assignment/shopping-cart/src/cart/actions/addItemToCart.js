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

function addItemToCart(productID, cartItems){
    return (dispatch) => {
        console.log(productID);
        const product = cartItems.find((item) => item.productID === productID);
        const item ={productID, id, present, quantity}
        cartApi
            .save(item).then((items) => {
                console.log("resp", items);
                const action = { type: 'ADD_PRODUCT_TO_CART', payload: items }
                dispatch(action);
            });
    }
}

export default addItemToCart;