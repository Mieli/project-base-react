import React from 'react';

export default function Input(props){
    return(
        <input
            name={props.name}
            type={props.type}
            value={props.value}
            className={props.className}
        ></input>
    )
}