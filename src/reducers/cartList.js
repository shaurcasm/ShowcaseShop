import { PRODUCT } from '../constants/actionTypes.js';
import produce from 'immer';    // Very important to maintain state's immutability through functions.

// Inititalise with offline planets constant.
const INITIAL_STATE = {
    cart: []
};

const cartList = (state = INITIAL_STATE, action) => produce(state, draft => {
    // Don't need default case when using immer.
    // eslint-disable-next-line default-case
    switch(action.type) {
        case PRODUCT.ADD:
            let { product } = action;
            if(product) {    
                draft.cart.push(product)
            }
            break;
        
        case PRODUCT.REMOVE: 
            let { productID } = action;
            if(productID) {
                draft.cart = draft.cart.filter(product => product.id !== productID)
            }
            break;

        case PRODUCT.RESET:
            draft.cart = [];
            break;
    }
});

export default cartList;