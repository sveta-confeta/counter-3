import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";
import Input from "./Input";
import {Routes,Route} from 'react-router-dom'
import {One} from "./One";
import {Two} from "./Two";

function App() {
    let [count, setCount] = useState(0);

    let [valueInputMax, setValueInputMax] = useState(0);
    let [valueInputStart, setValueInputStart] = useState(0);

    let [edit, setEdit] = useState<null | string>(null);

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.currentTarget.value)
        setValueInputMax(value);
        if (value <= valueInputStart) {
            setEdit('Incorrect value')
        } else {
            setEdit('Enter SET')
        }

    }
    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.currentTarget.value)
        setValueInputStart(value);
        if (value < 0 || value >= valueInputMax) {
            setEdit('Incorrect value')
        } else {
            setEdit('Enter SET')
        }

    }

    // ---useEffect--valueInputMax-///
    useEffect(() => {
        let valueString = localStorage.getItem('valueMax');
        if (valueString) {
            let newValueMax = JSON.parse(valueString);
            setValueInputMax(newValueMax)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('valueMax', JSON.stringify(valueInputMax))
    }, [valueInputMax]);

    //---useEffect--valueInputStart-///

    useEffect(() => {
        let valueString = localStorage.getItem('valueMin');
        if (valueString) {
            let newValueMin = JSON.parse(valueString);
            setValueInputStart(newValueMin)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('valueMin', JSON.stringify(valueInputStart))
    }, [valueInputStart]);

    //---count---///
    useEffect(() => {
        let valueString = localStorage.getItem('count');
        if (valueString) {
            let newCount = JSON.parse(valueString);
            setCount(newCount)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [valueInputStart]);

    //------///


    let btn_inc = () => count < valueInputMax ? setCount(count + 1) : count;
    let btn_reset = () => count > valueInputStart ? setCount(count = valueInputStart) : count;
    let setButton = () => {
        setCount(valueInputStart);
        setEdit(null)
    }

    const disabledInc = count === valueInputMax && count>=0;
     const disabledReset = count === 0;


    const titleMax = 'max value:'
    const titleStart = 'start value:'


    const classRedMax = valueInputMax <= valueInputStart ? 'red' : ' ';
    const classRedStart = valueInputStart < 0 || valueInputStart >= valueInputMax ? 'red' : ' ';


    return (
        <div className="app_wrapper">
            <Routes>
                <Route path = '/*' element={<Two count={count}
                                                btn_inc={btn_inc}
                                                 disabledReset={disabledReset}
                                                edit={ edit}
                                                btn_reset={btn_reset}
                                                setButton={setButton }
                                                valueInputMax={valueInputMax}
                                                disabledInc={disabledInc}/>}/>
                <Route path = '/two' element={<One titleMax={titleMax}
                                                   titleStart={titleStart}
                                                   setButton={setButton}
                                                   disabledInc={disabledInc}
                                                   valueInputMax={valueInputMax}
                                                   valueInputStart={valueInputStart}
                                                   onChangeHandlerStart={onChangeHandlerStart}
                                                   classRedMax={classRedMax}
                                                   onChangeHandlerMax={onChangeHandlerMax}
                                                   classRedStart={classRedStart }/>}/>

            </Routes>
        </div>
    )
}

export default App;
