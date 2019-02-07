import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <div>
            <Link to="/palindrome"><button>Palindrome</button></Link>
          </div>
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
