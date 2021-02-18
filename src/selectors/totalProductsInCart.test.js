import selector from './totalProductsInCart.js';
import * as action from '../actions/productsAction.js';
import rootReducer from '../reducers';

function addProduct(state, product) {

    return rootReducer(state, action.addProduct(product));
}

function removeProduct(state, productID) {

    return rootReducer(state, action.removeProduct(productID));
}

function resetCart(state) {

    return rootReducer(state, action.resetCart());
}

describe('Number of Products in Cart Selector', () => {

    describe('Adding', () => {
        test('When No Product is Added', () => {
            var expectedNumber = 0;
            var state = rootReducer(undefined, { type: null })
            expect(selector(state)).toEqual(expectedNumber);
        });

        test('When One Product is Added', () => {
            var expectedNumber = 1;
            // Actual Product is an Object, but it won't matter here as the selector just
            // returns length of the array.
            var state = addProduct(undefined, 'Product');
            expect(selector(state)).toEqual(expectedNumber);
        });

        test('When Two Producs are Added', () => {
            var expectedNumber = 2;
            var state = addProduct(undefined, 'Alpha');
            state = addProduct(state, 'Beta');
            expect(selector(state)).toEqual(expectedNumber);
        });
    });

    describe('Removing', () => {
        var products = [
            { id: '1', name: 'Alpha' },
            { id: '2', name: 'Beta' },
            { id: '3', name: 'Gamma' }
        ];
        var state = addProduct(undefined, products[0]);
        state = addProduct(state, products[1]);
        state = addProduct(state, products[2]);

        test('One Removed', () => {
            let expectedNumber = 3;
            expect(selector(state)).toEqual(expectedNumber);

            expectedNumber = 2;
            state = removeProduct(state, products[2].id);
            expect(selector(state)).toEqual(expectedNumber);
        });

        test('Two Removed', () => {
            let expectedNumber = 2;
            expect(selector(state)).toEqual(expectedNumber);
            
            expectedNumber = 0;
            state = removeProduct(state, products[0].id);
            state = removeProduct(state, products[1].id);
            expect(selector(state)).toEqual(expectedNumber);
        });
    });

    test('Reset', () => {

        var expectedNumber = 4;
        var state = addProduct(undefined, 'Alpha');
        state = addProduct(state, 'Beta');
        state = addProduct(state, 'Gamma');
        state = addProduct(state, 'Delta');
        expect(selector(state)).toEqual(expectedNumber);

        expectedNumber = 0;
        state = resetCart(state);
        expect(selector(state)).toEqual(expectedNumber);
    });
 });