import React from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom'

import Home from './view/home';
import LoginScreen from './view/login';
import UserPage from './view/userPage';

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={LoginScreen}/>
                <Route exact path='/userPage' component={UserPage}/>
            </Switch>
        </HashRouter>
    )
}