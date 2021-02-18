import * as action from './productsAction.js';
import { PRODUCT } from '../constants/actionTypes.js';

describe('Testing Products Actions', () => {

    var productUn = { id: '1', name: 'Mars' };
    var productDeux = { id: '2', name: 'Venus' };

    test('Send Action to Add Planet', () => {

        expect(action.addProduct(productUn)).toStrictEqual({ type: PRODUCT.ADD, product: productUn });
        expect(action.addProduct(productDeux)).toStrictEqual({ type: PRODUCT.ADD, product: productDeux });
    });

    test('Send Action to Replace Existing Planet with New One', () => {

        expect(action.removeProduct(productUn.id)).toStrictEqual({ type: PRODUCT.REMOVE, productID: productUn.id });
        expect(action.removeProduct(productDeux.id)).toStrictEqual({ type: PRODUCT.REMOVE, productID: productDeux.id });
    });

    test('Send Action to Reset Planet state', () => {

        expect(action.resetCart()).toStrictEqual({ type: PRODUCT.RESET });
    });
});