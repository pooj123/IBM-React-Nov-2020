function cartReducer (currentState = [], action) {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        let newState = [];
        let found = false;
            newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    found = true;
                    return { ...product , quantity: action.payload.quantity};
                }
                return product;
            });
            if (!found){
                newState.push(action.payload);
            };
        return newState;
    }
    return currentState;
}

export default cartReducer;