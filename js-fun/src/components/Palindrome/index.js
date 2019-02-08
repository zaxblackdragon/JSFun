import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export class Palindrome extends Component {
constructor(props) {
  super(props);
  this.state = {value: "", userInput: []}
  this.handleChange = this.handleChange.bind(this);
  this.keyPress = this.keyPress.bind(this);

};
handleChange = (e) => {
  e.preventDefault();
      this.setState({ value: e.target.value });
   };
keyPress = (e) => {
  e.preventDefault();
      this.setState({
       userInput:  e.key
      })
      // this works in capturing the key input is, but need to figure out how to push it to an array of input values. See ZooPoc Animal incorrectGuesses for example...
      console.log(this.state.userInput)
   };


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
         <form>
            <input 
            value={this.state.value} 
            onKeyUp={this.keyPress} 
            onChange={this.handleChange} />
          </form>
      </div>
      )
    }
  }



export default Palindrome;
