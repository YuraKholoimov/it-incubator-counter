import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {AppStateType} from "./Components/store/store";
import {ChangeValueAC, ResetValueAC, SetValueAC} from "./Components/store/counter-reduser";
import {SetCounter} from "./Components/Counter/SetCounter";
import {
    ChangeMaxValueAC,
    ChangeMinValueAC,
    initialStateSetCounterType,
    setErrorAC
} from "./Components/store/setCounter-reduser";
import s from "./Components/Counter/counter.module.css";


//--------- APP
export default function App() {
    const dispatch = useDispatch()
    const {min, max, error} = useSelector<AppStateType, initialStateSetCounterType>(
        state => state.setCounter)

    const setValue = (min: number, max: number) => {
        dispatch(setErrorAC(""))
        dispatch(SetValueAC(min, max))
    }

    const onChangeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget: {value, title}} = e

        if (title === "MIN") {
            dispatch(setErrorAC("on change"))
            dispatch(ChangeMinValueAC(Number(value)))
            if (Number(value) >= max || Number(value) < 0) dispatch(setErrorAC("Error"))

        } else if (title === "MAX") {
            dispatch(setErrorAC("on change"))
            dispatch(ChangeMaxValueAC(Number(value)))
            if (min >= Number(value) || Number(value) <= 0 || min < 0) dispatch(setErrorAC("Error"))
        }
    }

    const incHandler = () => min < max && dispatch(ChangeValueAC())
    const resetValueHandler = () => dispatch(ResetValueAC())

    let isMaxValue = min == max || error == "Error"
    const classname = () =>  error === "Error" ? `${s.error}` : ""

    return (
        <div className={"App"}>
            <Counter
                value={min}
                isMaxValue={isMaxValue}
                status={error}
                incHandler={incHandler}
                resetValueHandler={resetValueHandler}
            />
            <SetCounter
                classname={classname()}
                setValue={setValue}
                status={error}
                onChangeInputsValue={onChangeInputsValue}
            />
        </div>
    );
};
