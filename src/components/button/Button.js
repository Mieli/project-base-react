import React from 'react';

/**
 * Componete do tipo Button
 * 
 * Componente do tipo botão reutilizável desde que passado os parâmetros descritos na props
 * 
 * 
 * @author Mieli
 * @param {className, onClick, name} props 
 * @returns  retorna um componente do tipo botão
 */

export default function Button(props){
    return (
        <div>
            <button 
                className={props.className} 
                onClick={props.onClick} 
            >
                {props.name}
            </button>
        </div>
    );
}