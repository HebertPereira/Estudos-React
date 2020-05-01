import React from 'react';
import Home from './view/home';

import { Switch, Route, HashRouter } from 'react-router-dom'

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    )
}