import selector from './productsInCart.js';
import * as action from '../actions/productsAction.js';
import rootReducer from '../reducers';

function addProduct(state, product) {
    
    return rootReducer(state, action.addProduct(product));
}

function removeProduct(state, productID) {

    return rootReducer(state, action.removeProduct(productID));
}

function resetCart(state) {

    return rootReducer(state, action.resetCart())
}

describe('Products in Cart Selector', () => {

    test('No Products selected', () => {

        var expectedCart = [];
        var state = rootReducer(undefined, { type: null })
        expect(selector(state)).toEqual(expectedCart);
    });

    describe('Adding Products', () => {
        var products = [
            { id: '1', name: 'Millenium Falcon' },
            { id: '2', name: 'X-wing' },
            { id: '3', name: 'Star Destroyer' }
        ];

        test('One Product', () => {

            var expectedCart = ['1'];
            var state = addProduct(undefined, products[0]);
            expect(selector(state)).toEqual(expectedCart);
        });

        test('Two Products', () => {

            var expectedCart = ['1', '2'];
            var state = addProduct(undefined, products[0]);
            state = addProduct(state, products[1]);
            expect(selector(state)).toEqual(expectedCart);
        });
    });

    describe('Removing Products', () => {
        var products = [
            { id: '1', name: 'Millenium Falcon' },
            { id: '2', name: 'X-wing' },
            { id: '3', name: 'Star Destroyer' }
        ];
        var state = addProduct(undefined, products[0]);
        state = addProduct(state, products[1]);
        state = addProduct(state, products[2]);

        test('Removing One', () => {
            let expectedCart = ['1', '2', '3'];
            expect(selector(state)).toEqual(expectedCart);

            expectedCart = ['2', '3'];
            state = removeProduct(state, products[0].id);
            expect(selector(state)).toEqual(expectedCart);
        });

        test('Removing Two', () => {
            state = addProduct(state, products[0]);
            let expectedCart = ['2', '3', '1'];
            expect(selector(state)).toEqual(expectedCart);
            
            expectedCart = ['1'];
            state = removeProduct(state, products[2].id);
            state = removeProduct(state, products[1].id);
            expect(selector(state)).toEqual(expectedCart);
        });
    });

    test('Reset', () => {

        var products = [
            { id: '1', name: 'Millenium Falcon' },
            { id: '2', name: 'X-wing' },
            { id: '3', name: 'Star Destroyer' }
        ];
        var state = addProduct(undefined, products[0]);
        state = addProduct(state, products[1]);
        state = addProduct(state, products[2]);
        
        let expectedCart = ['1', '2', '3'];
        expect(selector(state)).toEqual(expectedCart);

        expectedCart = []
        state = resetCart(state);
        expect(selector(state)).toEqual(expectedCart);
    })
});
