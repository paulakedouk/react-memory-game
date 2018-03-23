import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import animals from './animals.json';

import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';
import AnimalCard from './components/AnimalCard/AnimalCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      animals
    };
  }

  clicked = id => {
    const animals = this.state.animals.map(card => {
      if (card.id === id) {
        if (card.clicked === false) {
          card.clicked = true;
          this.score++;
        } else {
          alert('Duh!! Try again. :)');
          this.reset();
        }
      } else {
        if (this.score === 12) {
          alert('YAY!');
          this.resetGame();
        }
      }
      return animals;
    });

    // Push a new animal array
    this.setState({ animals });
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  reset = () => {
    this.score = 0;
    const animals = this.state.animals.map(card => {
      card.clicked = false;
      return animals;
    });
  };

  render() {
    return (
      <div>
        <Title score={this.score}>Animals Memory Game with React.</Title>
        <div>
          <h4 className="score">
            Score: {this.state.score} | TopScore: {this.state.topScore}
          </h4>
        </div>
        <Wrapper>
          {this.shuffle(
            this.state.animals.map(card => (
              <AnimalCard key={card.id} id={card.id} image={card.image} clicked={this.clicked} />
            ))
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
