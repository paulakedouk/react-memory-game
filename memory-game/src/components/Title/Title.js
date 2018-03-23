import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.children}</h1>
        <p className="score">Scores: {console.log(this.props)}</p>
      </div>
    );
  }
}

export default Title;
