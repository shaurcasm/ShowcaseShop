import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    const [anybodyHome, setHomeStatus] = useState(false);
    let location = useLocation();

    useEffect(() => {
        let path = location.pathname;
        if(path === '/') {
            setHomeStatus(true);
        }
        else setHomeStatus(false);
    }, [location.pathname]);

    return (
        <nav id='navigation'>
            <ul id='nav-list'>
                <li><Link to='/'>Home</Link></li>
                {   !anybodyHome &&
                    <>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navigation;