import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
}  from 'react-router-dom';

import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Moderator from "./pages/Moderator"
import Developer from "./pages/Developer"
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import './App.css';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route path="/moderator" component={Moderator} />
        <Route path="/developer" component={Developer} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </Router>
);
}

export default App;
