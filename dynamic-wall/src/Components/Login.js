import React, { Component } from 'react';
import logo from '../sikkafull.png';
import LoginView from './LoginView.js';
import '../App.css';

class Login extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sikka Marketplace</h1>
        </header>
        <p className="App-intro">
          The below cards are loaded dynamically for you.
        </p>
      </div>*/
      <div className="App">
      	<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your Dynamic Wall</h1>
        </header>
        <div className="Div-center">
        	<LoginView />
        </div>
      </div>
    );
  }
}

export default Login;