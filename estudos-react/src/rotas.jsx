import React from 'react'
import { Hashrouter, Switch, Route} from 'react-router-dom'

import Home from './view/home.jsx'
export default () =>{
    return(
        <Hashrouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Hashrouter>
    )
}