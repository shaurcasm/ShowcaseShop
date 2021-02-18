import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from '../../constants/products';
import Product from '../Product';
import './Home.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {}
        };

        // Bind stateful methods
    }

    componentDidMount() {
        // Header has authorization compliant with extract as bearer with token method.
        fetch('/api/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            return res.json();
        }).then(user => {
            this.setState({ user: user });  
        }).catch(err => {
            console.log(err);
        });

    }

    componentDidUpdate() {
    }

    productsToComponents() {
        return products.map(product => (
            <div className='product' key={product.id}>
                <Product product={product} />
            </div>
        ));
    }

    render() {
        let username = this.state.user.username;

        return (
            <div className='homepage'>
                <div className='header'>
                    <div>
                        <h2>Home</h2>
                        <p>Welcome Home, {username}!</p>
                    </div>
                    <ul className='link-box'>
                        <li><Link to='/checkout'><i></i>Checkout x {this.props.total}</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                </div>
                
                <div className='products-container'>
                    {this.productsToComponents()}
                </div>
            </div>
        );
    }
}