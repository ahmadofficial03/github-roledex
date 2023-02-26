import React from "react";
import './card.style.css';

const Card = (props) => {
    const monster = props.monster;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}`} alt="" />
            <h1 className="card-title">{monster.name}</h1>
            <h3>{monster.email}</h3>
        </div>
    );
}

export default Card;