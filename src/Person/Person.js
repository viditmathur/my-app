import React from 'react';

const person =(props) =>{
    return (
        <div>
            <p>I'm a person and I'm {props.age }</p>
            <p>{props.children} How are you doing..</p>
        </div>

    );
}

export default person;