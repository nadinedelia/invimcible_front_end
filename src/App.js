
import React from "react"
import Home from "./components/home/index.jsx"
import About from "./components/about/index.jsx"
import Play from "./components/play"
import HelpScreen from "./components/helpScreen/helpScreen.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Player from "./components/player"

import Game from './components/Game.js';


export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/play" exact component={Play}/>
      <Route path="/about" exact component={About}/>
      <Route path="/help" exact component={HelpScreen}/>
    </Router>
  );
}
