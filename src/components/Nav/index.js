import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import './index.css';

export class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: true,
            display: "none",
            backgroundColor: "transparent",
        }

    }
    handleNavButton = (e) => {
        e.preventDefault();
        !this.state.isClicked 
        ? 
        this.setState({
          isClicked: true,
          display: "none",
          backgroundColor: "transparent",
        })
        :
        this.setState({
          isClicked: false,
          display: "block",
          backgroundColor: "rgba(000, 000, 000, .85)",
        });
        console.log(this.state.isClicked);
       }

       componentDidMount () {
        // Detects clicks everywhere on the screen
        document.body.addEventListener('click', this.resetNav)
      }
      // Resets the nav state when there is a click anywhere on the screen
      resetNav = (e)  => {
        this.setState({ 
          isClicked: true,
          display: "none",
          backgroundColor: "transparent",
         })
      }
  render() {
    return (
      <div style={{ background: this.state.backgroundColor }}>
        <button style={{ background: "red", color: "white" }} onClick={this.handleNavButton}>Nav</button>
        <div className="nav-page" style={{ backgroundColor: this.state.backgroundColor, display: this.state.display }}>
           
          <div>
            <Link to="/"><h1 className="link-nav-Home">Home</h1></Link>
            <Link to="/palindrome"><h1 className="link-nav-Pal">Palindrome</h1></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;
