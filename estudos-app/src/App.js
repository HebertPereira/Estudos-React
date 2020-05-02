import React from 'react';
import './App.css';
import '../node_modules/bootswatch/dist/flatly/bootstrap.min.css'
import '../node_modules/bootswatch/dist/flatly/bootstrap.css'

import NavBar from './components/navbar';
import Router from './Router'

import {HashRouter} from 'react-router-dom'

function App() {
  return (
      <HashRouter>
        <NavBar/>
        <Router/>
      </HashRouter>
  );
}

export default App;
