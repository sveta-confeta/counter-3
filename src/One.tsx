import React, {ChangeEvent} from 'react';
import './App.css'
import Input from "./Input";
import {Button} from "./Button";
import {NavLink} from "react-router-dom";

type OnePropsType= {
    titleMax: string
    titleStart: string
    onChangeHandlerMax: (event: ChangeEvent<HTMLInputElement>) => void
    classRedMax: string
    classRedStart: string
    setButton:()=>void
    disabledInc:boolean
    onChangeHandlerStart: (event: ChangeEvent<HTMLInputElement>) => void
    valueInputMax:number
    valueInputStart:number

}

export const One = (props:OnePropsType) => {
    return (
        <div className="App one">
            <div className="display_wrapper">
                <Input title={props.titleMax} onChange={props.onChangeHandlerMax} value={props.valueInputMax}
                       classRed={props.classRedMax}/>
                <Input title={props.titleStart} onChange={props.onChangeHandlerStart} value={props.valueInputStart}
                       classRed={props.classRedStart}/>
            </div>
                <div className="btn_wrapper_one">
                    <NavLink to='/'><Button name='set' callback={props.setButton} disabled={props.disabledInc}/></NavLink>
                </div>

        </div>
    );
};

