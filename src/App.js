import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Navbar/>
    <Router>

      <Route path="/" exact render={()=><Home/>}/>
    </Router>
    </>
  );
}

export default App;
