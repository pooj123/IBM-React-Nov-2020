function cartReducer (currentState = [], action) {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        let newState = [];
        let present = false;
            newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    present = true;
                    const newItem = { ...product , quantity: action.payload.quantity};
                    return newItem;
                }
                return product;
            });
            if (!present){
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