function cartReducer (currentState = [], action) {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        let newState = [];
        newState = [...currentState, action.payload]
        return newState;
    }
    return currentState;
}

export default cartReducer;