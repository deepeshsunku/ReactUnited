import React, { Component } from 'react';
import '../App.css';

// Components
import CardView from './Cards/CardView.js'

class Home extends Component {
  render() {
    return (
      <div>
      	<header className="Home-header">
          <h1 className="Home-title">Welcome Deepesh</h1>
        </header>
        <div>
          <CardView />
        </div>
      </div>
    );
  }
}

export default Home;