import React from 'react';
import s from './Display.module.css'
import { useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store-redux";

type DisplayPropsType={

}

export const Display=(props:DisplayPropsType)=>{
    let count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.valueInputMax)




    let resultColor=count ===maxValue ? s.red_count : s.count_wrapper
    return(
        <div className={s.displayWrapper}>

                       <div className={resultColor}> {count}</div>
        </div>



    )
}