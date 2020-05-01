import React from 'react';
import Home from './view/home';
import LoginScreen from './view/login';

import { Switch, Route, HashRouter } from 'react-router-dom'
import UserPage from './view/userPage';


export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Login' component={LoginScreen}/>
            <Route exact path='/UserPage' component={UserPage}/>
        </Switch>
    )
}