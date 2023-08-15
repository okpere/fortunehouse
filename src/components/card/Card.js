import React from 'react';
import './Card.css';

const Card = ({ children, style }) => {
  return (
    <div className='card-container'>
    <div className="card" style={style}>
      {children}
    </div>
    </div>
  );
}

export default Card;