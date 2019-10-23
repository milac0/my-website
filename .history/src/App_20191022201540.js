import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
      <Router>
        <Navbar />
        <Hero />
      </Router>
    
  );
}

export default App;
