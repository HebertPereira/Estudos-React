import React from 'react';
import Home from './view/home';
import Login from './view/Login';

import { Switch, Route, HashRouter } from 'react-router-dom'


export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Login' componet={Login}/>
        </Switch>
    )
}