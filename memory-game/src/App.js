import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import animals from './animals.json';

import Title from './components/Title/Title';

class App extends Component {
  state = {
    animals
  };

  score = 0;

  clicked = id => {};

  shuffle = () => {};

  reset = () => {};

  render() {
    return (
      <div>
        <Title score={this.score}>Animals Memory Game with React.</Title>
      </div>
    );
  }
}

export default App;
