import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import animals from './animals.json';

import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';
import AnimalCard from './components/AnimalCard/AnimalCard';

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
        <Wrapper>
          {this.state.animals.map(card => <AnimalCard id={card.id} key={card.id} image={card.image} />)}
        </Wrapper>
      </div>
    );
  }
}

export default App;
