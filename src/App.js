// Core SPA.
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute.js';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';

// ToDO
import Checkout from './components/Checkout';

import './App.scss';

const App = () => {
    /*
    let dispatch = useDispatch();
    let location = useLocation();

    useEffect(() => {
        let path = location.pathname;
        if(path === '/result' || path === '/read') {
            setNeedPrologue(false);
        }
        else setNeedPrologue(true);
    }, [location.pathname])
    */
    return(
        <div className='app-container'>
            <header>
                <h1>LAWYERS' SHOP</h1>
                <Navigation />
            </header>
            <main id='main-container'>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/checkout' component={Checkout} />
                </Switch>
            </main>
            <footer id='footer'>
                Copyright © Shaurya S. Pal 2021.
            </footer>
        </div>
    );
}

export default App