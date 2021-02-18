// Lists all items in cart
// Needs to be connected to Redux then reference those ids with database to get full product
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { removeProduct, resetCart } from '../../actions/productsAction.js';
import totalProductsInCart from '../../selectors/totalProductsInCart.js';
import Checkout from './Checkout';

const mapStateToProps = state => ({
    inCart: state.cartList.cart,
    total: totalProductsInCart(state)
});

const mapDispatchToProps = dispatch => ({
    removeProduct: (productID) => dispatch(removeProduct(productID)),
    resetCart: () => dispatch(resetCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);