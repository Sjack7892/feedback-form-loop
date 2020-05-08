import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback Form</h1>
        </header>
        <br/>
        <Feeling />
        <Understanding />
        <Supported />
        <Comments />
      </div>
    );
  }
}

export default App;
