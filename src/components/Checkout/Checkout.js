import React , { Component } from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';
import './Checkout.scss';

export default class Checkout extends Component {
    constructor(props) {
        super(props);

        // Binders
        this.stateProductsToComponents = this.stateProductsToComponents.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    componentDidUpdate() {
    
    }

    removeFromCart(event) {
        // Remove product from cart using product ID
        const id = event.target.value;
        this.props.removeProduct(id);
    }

    stateProductsToComponents() {
        var products = this.props.inCart;

        return products.map(product => (
            <div className='inCart' key={product.id}>
                <button className='discard' value={product.id} onClick={this.removeFromCart}>Discard</button>
                <Product product={product} from='/checkout' />
            </div>
        ));
    }

    render() {

        return (
            <div className='checkout'>
                <div className='header'>
                    <h2>Checkout x {this.props.total}</h2>
                    <ul className='link-box'>
                        <li className='clearout' onClick={this.props.resetCart}>Clear Cart</li>
                        <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                </div>
                <div className='products-container'>
                    {this.stateProductsToComponents()}
                </div>
                <button id='checkout-button'>Checkout</button>
            </div>
        );
    }
}