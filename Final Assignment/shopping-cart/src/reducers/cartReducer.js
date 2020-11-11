function cartReducer (currentState = [], action) {
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        // check if that item we are adding to cart, already exists in cart
        let present = false;
        let cnt=0;
        currentState.forEach((item) => {
            if (item.productID === action.payload.productID) {
                present = true;
                return true;
            }
            cnt = cnt+1;
            if (cnt === currentState.length) {
                present = false; 
                return false;
            }
        })
        console.log(present);
        let newState=[];
        if (present) {
            const newValue = action.payload;
            ++newValue.quantity;

            newState = [...currentState, newValue];
        } else {
            newState = [...currentState, action.payload];
        }


        // const newState = [...currentState, action.payload];
        return newState;

    }
    return currentState;
}

export default cartReducer;