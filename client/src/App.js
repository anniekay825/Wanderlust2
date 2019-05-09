
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Signin from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

class App extends Component {
  render() {
    return (

    <div className="App">
        <div>
            <Router basename={`${process.env.PUBLIC_URL}`}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
                {/* <Route component={Search} /> */}
              </Switch>
            </Router>
        </div>
      </div>

    );  
  }
}

export default App;
