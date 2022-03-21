import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {AppStateType} from "./Components/store/store";
import {
    changeValueTC,
    getValueFromLocalStorageTC,
    initialStateType,
    ResetValueAC
} from "./Components/store/counter-reduser";
import {SetCounter} from "./Components/Counter/SetCounter";
import {log} from "util";

export type CounterType = {
    min: number
    max: number
    status: string
}

//--------- APP
export default function App() {
    const {min, max, status} = useSelector<AppStateType, initialStateType>(state => state.counterValue)
    const dispatch = useDispatch()

    useEffect(() => {
        let storage = localStorage.getItem("counter-value")
        let value = storage && JSON.parse(storage)
        dispatch(getValueFromLocalStorageTC(value))
    }, [])

    const incHandler = () => {
        min < max && dispatch(changeValueTC())
    }

    const resetValueHandler = () => {
        dispatch(ResetValueAC())
    }

    let isMaxValue = min == max || status == "Error"

    return (
        <div className={"App"}>
            <Counter
                value={min}
                isMaxValue={isMaxValue}
                status={status}
                incHandler={incHandler}
                resetValueHandler={resetValueHandler}
            />
            <SetCounter />
        </div>
    );
};


// const getLocalStorageValue = () => {
//     let valet = localStorage.getItem("counterValue")
//     let {min, max} = valet && JSON.parse(valet)
//     setCounter({...counter, min, max})
// }

//
// const setValue = (min: number, max: number) => {
//     localStorage.setItem("counterValue", JSON.stringify({min, max}))
//     setCounter({...counter, min, max, status: ""})
// }

// const showStatus = (status: string) => setCounter({...counter, status})