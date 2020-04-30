import React from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
import Home from './view/home';
import NavBar from './component/navbar';
import Rotas from './rotas.jsx'

function App() {
    return ( 
        <>
            <NavBar/> 
            <Rotas />
        </>
    );
}

export default App;