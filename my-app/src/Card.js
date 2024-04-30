import React, { useState } from 'react';
import './CSS/Card.css';
import data from './data';

export default function Card({ id, imagePath }) {
  const item = data.find((item) => item.id === id);

  const [addButtonText, setAddButtonText] = useState("Add to cart");

  const addToCart = () => {
    setAddButtonText("Added");
    // Here you can also perform other operations related to adding the item to the cart
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imagePath} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>
          <button className="btn btn-primary" onClick={addToCart}>
            {addButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
