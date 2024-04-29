
import React from 'react';

import './CSS/Card.css'
export default function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }} >
        <img src={props.img_path} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price}</p>
          <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  );
}
