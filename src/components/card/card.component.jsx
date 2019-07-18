import React from 'react';
import './card.component.css';


export const Card = (props) => {

    return (
        <div className='card-container'>
            {/* {props.children} */}
            <img src={`https://robohash.org/${props.robot.id}?set=set2&size=150x150`} alt="robot"/>
            <h3>{props.robot.name}</h3>
            <h5>{props.robot.email}</h5>

        </div>
    )
};