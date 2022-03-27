import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../utils/authService';

class Logout extends Component {

    componentWillMount = () => {
        authService.signOut(() => {});
    };

    render = () => {

        return (
            <Redirect to={'/login'}/>
        );
    }
}

export default Logout;