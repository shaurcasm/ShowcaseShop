import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../utils/isAuthenticated';
import './Login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedin: isAuthenticated()
        };

        // Bind stateful methods
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // Stop form actions
        event.preventDefault();
        event.stopPropagation();

        // Sending the form data as URLencoded, could also use json
        let form = event.target,
            formData = new FormData(form),
            params = new URLSearchParams(formData);

        // Send request to the server and store flash if there
        // If successful, store the received token in localStorage
        fetch('/api/login', {
            method: 'POST',
            body: params
        }).then(res => {
            return res.json()
        }).then(data => {
            localStorage.setItem('token', data.token);
            this.setState({ loggedin: true });
        }).catch(err => {
            console.error(err);
        });
    }

    // Redirects to Homepage if user is logged in
    render() {
        if(this.state.loggedin) {
            return (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: this.props.location }
                    }}
                />
            );
        } else {
            return (
                <div id='login-container'>
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label for='username' class='username-label'>Username: </label>
                        <input id='username' type='text' name='username' pattern='.{2, 16}' required />
                    
                        <label for='password' class='password-label'>Password: </label>
                        <input id='password' type='password' name='password' pattern='.{6, 20}' required />

                        <button type='submit' class='submit-button'>Submit</button>
                    </form>
                </div>
            );
        }
    }
}