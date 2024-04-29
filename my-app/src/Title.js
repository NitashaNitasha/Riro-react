
import React from 'react'
import './CSS/Title.css';
export default function Title(props) {

    return (
        <div class="title" id={props.collection_id}>
            <h2>{props.title}</h2>
        </div>
    )
}


