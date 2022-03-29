import React from 'react';
import {Display} from "./Display";
import {Button} from "./Button";
import {NavLink} from "react-router-dom";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store-redux";

type TwoPropsType = {

    btn_inc: () => void
    btn_reset: () => void
    setButton: () => void
    disabledInc: boolean
    disabledReset:boolean
}

export const Two = (props: TwoPropsType) => {



    return (
        <div className="App two">
            <div className="display_wrapper">
                <Display/>
            </div>
            <div className="btn_wrapper">
                <Button name='inc' callback={props.btn_inc} disabled={props.disabledInc}/>
                <Button name='reset' callback={props.btn_reset} disabled={props.disabledReset}/>
                <NavLink to='/two'><Button name='set' callback={props.setButton} /></NavLink>

            </div>
        </div>
    );
};

