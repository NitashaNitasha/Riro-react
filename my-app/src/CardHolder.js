import React from 'react';
import Card from './Card'; // Import the Card component
import './CSS/Cardholder.css';

export default function CardHolder(props) {
    return (
        <div className="cards">
            <Card id={props.id1} imagePath={props.imgPath1} />
            <Card id={props.id2} imagePath={props.imgPath2} />
            <Card id={props.id3} imagePath={props.imgPath3} />
        </div>
    );
}
