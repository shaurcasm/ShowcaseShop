import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav id='navigation'>
            <ul id='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;