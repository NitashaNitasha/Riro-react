
import React from 'react'
import Card from './Card';
import './CSS/Cardholder.css'
export default function CardHolder(props) {

    return (
        <div class="cards" >
            <Card img_path={props.img1} name={props.name1} price={props.price1}/>
            <Card img_path={props.img2} name={props.name2} price={props.price2}/>
            <Card img_path={props.img3} name={props.name3} price={props.price3}/>
        </div>
    )
}
