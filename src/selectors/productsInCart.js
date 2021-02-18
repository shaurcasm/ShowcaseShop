import { createSelector } from 'reselect';

// Selects the needed part of state
const products = state => state.cartList.cart

// Returns derived information from the state. This case, total entries in a state array.
const productsInCart = createSelector(
    [products],
    cart => {
        //console.log(cart);
        var products = cart.map(product => product.id)

        return products;
    }
);

export default productsInCart;