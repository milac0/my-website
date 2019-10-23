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
        <Route path ="/" exact component={Home} />
        <Route path ="/contact" exact component={Contact} />
      </Router>
    
  );
}

export default App;
