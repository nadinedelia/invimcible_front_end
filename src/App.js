
import React from "react"
import Home from "./components/home/index.jsx"
import About from "./components/about/index.jsx"
import World from "./features/world"
import HelpScreenLevel1 from "./components/helpScreen/helpScreenLevel1.jsx"
import HelpScreenLevel2 from "./components/helpScreen/helpScreenLevel2.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Player from "./components/player"

import Game from './components/Game.js';


export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/play" exact component={World}/>
      <Route path="/about" exact component={About}/>
      <Route path="/help1" exact component={HelpScreenLevel1}/>
      <Route path="/help2" exact component={HelpScreenLevel2}/>
    </Router>
  );
}
