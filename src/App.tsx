import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {AppStateType} from "./Components/store/store";
import {
    ChangeValueAC,
    initialStateType,
    ResetValueAC,
    setErrorAC,
    SetValueAC
} from "./Components/store/counter-reduser";
import {SetCounter} from "./Components/Counter/SetCounter";
import {
    getValueFromLocalStorageTC,
    setValueSetCounterTC
} from "./Components/store/setCounter-reduser";


//--------- APP
export default function App() {
    const dispatch = useDispatch()
    const {min, max, status} = useSelector<AppStateType, initialStateType>(
        state => state.counterValue)

    useEffect(() => {
        let storage = localStorage.getItem("counter")
        let {min, max} = storage && JSON.parse(storage)
        dispatch(SetValueAC(min, max))
    }, [])

    const setValue = (min: number, max: number) => {
        dispatch(setErrorAC(""))
        dispatch(setValueSetCounterTC(min, max))
    }
    const incHandler = () => min < max && dispatch(ChangeValueAC())
    const resetValueHandler = () => dispatch(ResetValueAC())
    const getValueFromLocalStorage = () => dispatch(getValueFromLocalStorageTC())

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
            <SetCounter
                setValue={setValue}
                getValueFromLocalStorage={getValueFromLocalStorage}
                status={status}
            />
        </div>
    );
};
