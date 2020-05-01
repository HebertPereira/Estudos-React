import React from 'react';
import Home from './view/home';
import Login from './view/Login';

import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom'


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Login' componet={Login}/>
            </Switch>
        </BrowserRouter>
    )
}