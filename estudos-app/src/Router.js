import React from 'react';
import Home from './view/home';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import loginScreen from './view/Login';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Login' component={loginScreen}/>
            </Switch>
        </BrowserRouter>
    )
}