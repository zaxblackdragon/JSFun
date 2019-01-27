import React, { Component } from 'react';
import './index.css';
import logo from '../../images/zaxLogoRound.png';


export class Landing extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="Header-text">
           A playground for Javascript challenges.
          </p>
          <a
            className="App-link"
            href="https://github.com/zaxblackdragon/JSFun"
            target="_blank"
            rel="noopener noreferrer"
          >
            See it on GitHub
          </a>
        </header>
        
      </div>
    )
  }
}

export default Landing
