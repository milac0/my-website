import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact';


function App() {
  return (
      <Router>
        <Home />
        <Contact />
      </Router>
    
  );
}

export default App;
