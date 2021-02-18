import { createSelector } from 'reselect';

// Selects the needed part of state
const products = state => state.cartList.cart

// Returns derived information from the state. This case, total entries in a state array.
const totalProductsInCart = createSelector(
    [products],
    cart => cart.length
);

export default totalProductsInCart;