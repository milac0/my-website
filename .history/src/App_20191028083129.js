import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact';

console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
      <Router>
        <Switch>
        <Route path ="/" exact component={Home} />
        <Route path ="/contact" component={Contact} />
        </Switch>
      </Router>
    
  );
}

export default App;
