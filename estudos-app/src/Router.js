import React from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom'

import Home from './view/home';
import LoginScreen from './view/login';
import UserPage from './view/userPage';
import Cadastro from './view/cadastro';
import CadastraMateria from './view/cadastro/cadastroMaterias';

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={LoginScreen}/>
                <Route exact path='/userPage' component={UserPage}/>
                <Route exact path='/cadastro' component={Cadastro}/>
                <Route exact path='/cadastro/cadastro-materia' component={CadastraMateria}/>
            </Switch>
        </HashRouter>
    )
}