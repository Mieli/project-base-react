import React from 'react';


/**
 * Componete do tipo Input
 * 
 * Componente do tipo Input reutilizável desde que passado os parâmetros descritos na props
 * 
 * 
 * @author Mieli
 * @param {name, type, value, className, onChange} props 
 * @returns  retorna um componente do tipo Input
 */
export default function Input(props){
    return(
        <input
            name={props.name}
            type={props.type}
            value={props.value}
            className={props.className}
            onChange={props.onChange}
        ></input>
    )
}