import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../images/zaxLogoRound.png';


export class Landing extends Component {

constructor(props) {
  super(props);
  this.state = {
    textColor: "#669999",
    isClicked: 0,
    arrTargetPosition: 0, 
  }
}

  handleTextColorChange = (e) => {
    e.preventDefault();
    const colors = ["white", "red", "orange", "yellow", "green", "blue", "indigo", "violet",];
    this.state.isClicked >= 0 && this.state.isClicked < colors.length -1 ? 
      this.setState({
        arrTargetPosition: this.state.arrTargetPosition + 1,
        textColor: colors[this.state.arrTargetPosition],
        isClicked: this.state.arrTargetPosition,
        }) 
        : this.setState({
        textColor: "#669999",
        arrTargetPosition: 0,
        isClicked: 0,
        });
  }
  handleTextReset = (e) => {
    e.preventDefault();
    this.setState({
    textColor: "#669999",
    })
  }

  render() {
    return (
     
      <div> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Header-text">
           A playground for Javascript challenges.
          </p>
          <div>
          <Link to="/palindrome"><button className="link-palindrome">Palindrome</button></Link>
          </div>
          <div>
            <button onClick={this.handleTextColorChange}>Text Color Change</button>
            <button onClick={this.handleTextReset}>Text Reset</button>
            
          </div>
          <a
            className="App-link"
            href="https://github.com/zaxblackdragon/JSFun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: this.state.textColor }}
          >
            See it on GitHub
          </a>
        </header>
        
      </div>
    )
  }
}

export default Landing
