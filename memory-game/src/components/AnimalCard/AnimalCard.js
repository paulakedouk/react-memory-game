import React from 'react';
import './AnimalCard.css';

const AnimalCard = props => (
  <div onClick={() => props.clicked(props.id)} className="card">
    <div className="img-container">
      <img className="responsive-img" src={props.image} />
    </div>
  </div>
);

export default AnimalCard;
