import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './components/Game.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <div>
       <Switch>
         <Route
           exact
           path="/"
           render= { props => (
             <Game {...props}/>
           )}/>
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
