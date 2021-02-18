// Actions for Redux reducer
import { PRODUCT } from '../constants/actionTypes.js';

export const addProduct = product => ({
    type: PRODUCT.ADD,
    product
});

export const removeProduct = productID => ({
    type: PRODUCT.REMOVE,
    productID
});

export const resetCart = () => ({
    type: PRODUCT.RESET
});