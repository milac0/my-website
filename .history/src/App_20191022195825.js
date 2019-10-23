import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

export default App;
