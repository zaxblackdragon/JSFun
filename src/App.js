import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/index";
import Landing from './components/Landing';
import Palindrome from './components/Palindrome/index';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      bgColors: "whitesmoke",
      isClicked: 0,
      arrTargetPosition: 0,
      textColor: "#669999",
    };
 }

 handleBackgroundColorChange = (e) => {
    e.preventDefault();
    const bgColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet",];
    this.state.isClicked >= 0 && this.state.isClicked < bgColors.length -1 ? 
        this.setState({
            arrTargetPosition: this.state.arrTargetPosition + 1,
            bgColors: bgColors[this.state.arrTargetPosition],
            isClicked: this.state.arrTargetPosition,
          }) 
          : this.setState({
            bgColor: "whitesmoke",
            isClicked: 0,
            arrTargetPosition: 0,
          });
  }
  handleBackgroundColorReset = (e) => {
    e.preventDefault();
    this.setState({
      bgColors: "whitesmoke",
      isClicked: 0,
      arrTargetPosition: 0,
    })
  }

  render() {
    return (
      
      <div className="App" style={{ background: this.state.bgColors }}>
      <Nav />
      <button onClick={this.handleBackgroundColorChange}>Background Color</button>
      <button onClick={this.handleBackgroundColorReset}>Background Reset</button>
      
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
