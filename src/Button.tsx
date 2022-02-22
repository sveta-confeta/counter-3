import React from 'react';
import s from './Button.module.css'
type ButtonPropsType={
    name:string
    callback:()=>void
    disabled?:boolean
}


export const Button=(props:ButtonPropsType)=>{
    const buttonHandler=()=>{
        props.callback()}

    return(
        <button className={`${s.btn} ${props.disabled===true? s.disabled:'' }`}onClick={buttonHandler}>
            {props.name}
        </button>

    )
}
