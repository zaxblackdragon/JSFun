import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export class Palindrome extends Component {
constructor(props) {
  super(props);
  this.state = {
    value: "",
    mess: "",
    placeholder: "Try a something...",
    targetIndexPositionNo: 0,
    targetIndexPositionYes: 0,
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
};


// Captures whats typed into the input field by the user
handleChange = (e) => {
  e.preventDefault();
      this.setState({ value: e.target.value });
   };

// Figures out if the user input is a palindrom or on when the "Submit" button is pressed.   
handleSubmit = (e) => {
  e.preventDefault();
const placeholderMessNo = ["Try something else...", "Keep going...", "You can do this...", "You got this!"];
const placeholderMessYes = ["That's awsome!", "Keep it up", "You're fantastic!", "You're a maniac..."];

const placeholderYes = placeholderMessYes[this.state.targetIndexPositionYes];
const placeholderNo = placeholderMessNo[this.state.targetIndexPositionNo];
// Captures the User Input and filters out the blank spaces
const userInput = this.state.value.split('').filter((v) => { return v !== " " });
// Iterates through the above array and compares the first letter to the last letter, then is moves in incrementally by -1
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== userInput[userInput.length - 1 - i]) {
// For a "no" answer
          this.setState({ 
            mess: "This in not a Palindrome, bummer in the summer!",
            value: "",
            placeholder: placeholderNo,
            targetIndexPositionNo: this.state.targetIndexPositionNo + 1,
           });
          return;
          } 
      }
  // For a "yes" answer
        this.setState({ 
          mess: "This is a Palindrome bro, Yeehaw!", 
          value: "",
          placeholder: placeholderYes,
          targetIndexPositionYes: this.state.targetIndexPositionYes + 1,
        });
        return;
  }
  render() {
    return (
      <div className="App-site">
        <div  className="div-home">
          <Link to="/"><h4 className="link-hfour">Home</h4></Link>
        </div>
        <h1 className="h-pal">Palindrome Page</h1>
        <div>
          <p>A <strong>"Palindrome"</strong> is a word, phrase, or sequence that reads the same backward as forward. <br /><strong>Ex:</strong> madam or nurses run.</p>
        </div>
        <p>Type in a word and see if it is a Palindrome:</p>
         <form onSubmit={this.handleSubmit}>
            <input 
            style={{ color: "magenta" }}
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.value} 
            onChange={this.handleChange} 
            />
            <input type="submit" value="Submit" />
          </form>
          <h2 style={{ color: "magenta" }}>{this.state.mess}</h2>
          <div>
            <p>Score:</p>
            <p><strong>Wins:</strong>{this.state.targetIndexPositionYes}</p>
            <p><strong>Losses:</strong>{this.state.targetIndexPositionNo}</p>
          </div>
      </div>
      )
    }
  }

export default Palindrome;
