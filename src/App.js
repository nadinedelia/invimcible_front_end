import React from "react"
import Home from "./components/home/home.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Player from "./components/player"

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
    </Router>
  );
}
