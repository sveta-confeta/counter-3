import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {One} from "./One";
import {Two} from "./Two";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store-redux";
import {changeMaxValueAC, changeStartValueAC, countAC} from "./redux/counterReducer";

function App() {
    // let [count, setCount] = useState(0);//cобрали все useStates в один обьект.
    //
    // let [valueInputMax, setValueInputMax] = useState(0);
    // let [valueInputStart, setValueInputStart] = useState(0);
    //
    // let [edit, setEdit] = useState<null | string>(null);

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.valueInputStart)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.valueInputMax)
    let count = useSelector<AppRootStateType, number>(state => state.counter.count)


    const dispatch = useDispatch()

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        let value = Number(event.currentTarget.value )
        // setValueInputMax(value);
        dispatch(changeMaxValueAC(value));

    }
    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        let value = Number(event.currentTarget.value)
        // setValueInputStart(value);
        dispatch(changeStartValueAC(value));

    }

    // ---useEffect--valueInputMax-///
    // useEffect(() => {
    //     let valueString = localStorage.getItem('valueMax');
    //     if (valueString) {
    //         let newValueMax = JSON.parse(valueString);
    //         dispatch(changeMaxValueAC(newValueMax))
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem('valueMax', JSON.stringify(maxValue))
    // }, [maxValue]);

    //---useEffect--valueInputStart-///

    // useEffect(() => {
    //     let valueString = localStorage.getItem('valueMin');
    //     if (valueString) {
    //         let newValueMin = JSON.parse(valueString);
    //         dispatch(changeStartValueAC(newValueMin))
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem('valueMin', JSON.stringify(startValue))
    // }, [startValue]);
    //
    // //---count---///
    // useEffect(() => {
    //     let valueString = localStorage.getItem('count');
    //     if (valueString) {
    //         let newCount = JSON.parse(valueString);
    //         dispatch(countAC(newCount))
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem('count', JSON.stringify(count))
    // }, [startValue]);

    //------///


    const btn_inc = () => {
       if (count < maxValue)  dispatch(countAC(count + 1))
     }

    const btn_reset = () => {
        if (count > startValue) dispatch(countAC(count = startValue))
    }

    const setButton = () => {
        dispatch(countAC(startValue));
    }

    const disabledInc = (count === maxValue) && (count >= 0);
    const disabledReset = count === 0;

    const titleMax = 'max value:'
    const titleStart = 'start value:'

    const classRedMax = (maxValue <= startValue) ? 'red' : ' ';
    const classRedStart = ( (startValue < 0) || (startValue >= maxValue) ) ? 'red' : ' ';


    return (
        <div className="app_wrapper">
            <Routes>
                <Route
                    path = '/*'
                    element={
                        <Two
                            btn_inc={btn_inc}
                            disabledReset={disabledReset}
                            btn_reset={btn_reset}
                            setButton={setButton }
                            disabledInc={disabledInc}
                    />}
                />
                <Route path = '/two' element={<One titleMax={titleMax}
                                                   titleStart={titleStart}
                                                   setButton={setButton}
                                                   disabledInc={disabledInc}

                                                   onChangeHandlerStart={onChangeHandlerStart}
                                                   classRedMax={classRedMax}
                                                   onChangeHandlerMax={onChangeHandlerMax}
                                                   classRedStart={classRedStart }/>}/>

            </Routes>
        </div>
    )
}

export default App;
