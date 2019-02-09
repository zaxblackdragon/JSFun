import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export class Palindrome extends Component {
constructor(props) {
  super(props);
  this.state = {
    value: "",
    mess: "",
    placeholder: "",
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
const placeholder = this.state.value;
// Captures the User Input and filters out the blank spaces
const userInput = this.state.value.split('').filter((v) => { return v !== " " });
// Iterates through the above array and compares the first letter to the last letter, then is moves in incrementally by -1
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== userInput[userInput.length - 1 - i]) {
// For a "no" answer
          this.setState({ 
            mess: "This in not a Palindrome, bummer in the summer!",
            value: "",
            placeholder: placeholder,
           });
          return;
          } 
      }
  // For a "yes" answer
        this.setState({ 
          mess: "This is a Palindrome bro, Yeehaw!", 
          value: "",
          placeholder: placeholder,
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
      </div>
      )
    }
  }

export default Palindrome;
