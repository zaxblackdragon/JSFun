import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Palindrome from './components/Palindrome/index';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route path="/palindrome" component={ Palindrome } />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
