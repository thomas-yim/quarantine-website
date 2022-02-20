import React from 'react';
import {
    BrowserRouter,
    Route, Switch
} from 'react-router-dom';

import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Moderator from "./pages/Moderator"
import Developer from "./pages/Developer"
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import './App.css';


function App() {
  return (
      <BrowserRouter>
          <div>
                <Route exact path="/home" component={Home} />
                <Route path="/moderator" component={Moderator}/>
                <Route path="/developer" component={Developer}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/" component={Landing} />
          </div>
      </BrowserRouter>
);
}

export default App;
