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
      animals
    };
  }

  clicked = id => {
    let { animals, score } = this.state;

    if (!animals[id].clicked) {
      console.log(animals[id].clicked);
      animals[id].clicked = true;
      score++;
    } else {
      score = 0;
      animals[id].clicked = false;
      alert('Duh!! Try again. :)');
    }

    this.setState({
      animals,
      score
    });
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    // console.log(this.state.animals);
    return (
      <div>
        <Title>Animals Memory Game with React.</Title>
        <div>
          <h4 className="score">Score: {this.state.score}</h4>
        </div>
        <Wrapper>
          {this.shuffle(
            this.state.animals.map(card => (
              <AnimalCard key={card.id} id={card.id} image={card.image} clicked={this.clicked.bind(this, card.id)} />
            ))
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
