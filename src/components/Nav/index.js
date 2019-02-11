import React, { Component } from 'react';
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
      handleHome = (e) => {
        console.log("triggered")
      }
  render() {
    return (
      <div style={{ background: this.state.backgroundColor }}>
        <button className="btn-nav" onClick={this.handleNavButton}>N</button>
        <div className="nav-page" style={{ backgroundColor: this.state.backgroundColor, display: this.state.display }}>
           
          <div>
            <h1 className="link-nav-Home"><a href="/">Home</a></h1>
            <h1 className="link-nav-Pal"><a href="/palindrome">Palindrome Game</a></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;
