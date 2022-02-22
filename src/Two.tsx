import React from 'react';
import {Display} from "./Display";
import {Button} from "./Button";
import {NavLink} from "react-router-dom";
import './App.css'

type TwoPropsType = {
    count: number
    valueInputMax: number
    btn_inc: () => void
    edit: string | null
    btn_reset: () => void
    setButton: () => void
    disabledInc: boolean
}

export const Two = (props: TwoPropsType) => {
    return (
        <div className="App two">
            <div className="display_wrapper">
                <Display count={props.count} valueInputMax={props.valueInputMax} edit={props.edit}/>
            </div>
            <div className="btn_wrapper">
                <Button name='inc' callback={props.btn_inc} disabled={props.disabledInc}/>
                <Button name='reset' callback={props.btn_reset}/>
                <NavLink to='/two'><Button name='set' callback={props.setButton} disabled={props.disabledInc}/></NavLink>

            </div>
        </div>
    );
};

