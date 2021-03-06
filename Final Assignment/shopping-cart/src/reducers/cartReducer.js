function cartReducer (currentState = [], action) {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        let present = false;
        let newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    present = true;
                    // if present, increment quantity and keep other properties same
                    const newItem = { ...product , quantity: action.payload.quantity};
                    return newItem;
                }
                return product;
            });
            if (!present){
                // if not present, add the new product
                newState = [...currentState, action.payload]
            };
        return newState;
    }
    if (action.type === 'REMOVE_PRODUCT_FROM_CART') {
        const newState = currentState.filter(p => p.productID !== action.payload);
        return newState;
    }
    if (action.type === 'REMOVE_PRODUCT_FROM_REDUX') {
        const newState = currentState.filter(p => p.productID !== action.payload);
        return newState;
    }
    return currentState;
}
export default cartReducer;