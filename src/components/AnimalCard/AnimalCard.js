import React from 'react';
import './AnimalCard.css';

const AnimalCard = props => (
  <div className="card" onClick={() => props.clicked(props.id)}>
    <div className="img-container">
      <img alt={props.name} className="responsive-img" src={props.image} />
    </div>
  </div>
);

export default AnimalCard;
