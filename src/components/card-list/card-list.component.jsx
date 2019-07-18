import React from 'react';
import './card-list.component.css';

import {Card} from '../card/card.component';

export const CardList = (props) => {
    // console.log('props');
    // console.log(props);

    return (
        <div className='card-list'>
            {/* {props.children} */}
            {
                props.robots.map(robot => (
                    <Card key={robot.id} robot = {robot}></Card>
                ))
            } 
        </div>
    )
};