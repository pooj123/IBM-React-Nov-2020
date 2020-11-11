function cartReducer (currentState = [], action) {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        let newState = [];
        let present = false;
            newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    present = true;
                    return { ...product , quantity: action.payload.quantity};
                }
                return product;
            });
            if (!present){
                newState = [...currentState, action.payload]
            };
        return newState;
    }
    return currentState;
}
export default cartReducer;