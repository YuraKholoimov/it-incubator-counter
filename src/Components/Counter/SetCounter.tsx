import React from "react";
import s from "./counter.module.css";
import MyButton from "../UI/Buttons/MyButton";
import InputSetValue from "../UI/Inputs/InputSetValue";
import {useDispatch, useSelector} from "react-redux";
import {setErrorAC} from "../store/counter-reduser";
import {ChangeMaxValueAC, ChangeMinValueAC, initialStateSetCounterType} from "../store/setCounter-reduser";
import {AppStateType} from "../store/store";

export type SetCounterPropsType = {
    status: string
    getValueFromLocalStorage: () => void
    setValue: (min: number, max: number) => void
}

export function SetCounter(props: SetCounterPropsType) {
    const dispatch = useDispatch();
    const {min, max} = useSelector<AppStateType, initialStateSetCounterType>(
        state => state.setCounter)

    const onChangeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget: {value, title}} = e

        if (title == "MIN") {
            dispatch(setErrorAC("on change"))
            dispatch(ChangeMinValueAC(Number(value)))
            if (Number(value) >= max || Number(value) < 0) dispatch(setErrorAC("Error"))

        } else if (title == "MAX") {
            dispatch(setErrorAC("on change"))
            dispatch(ChangeMaxValueAC(Number(value)))
            if (min >= Number(value) || Number(value) <= 0 || min < 0) dispatch(setErrorAC("Error"))
        }
    }

    const classname = props.status == "Error" ? `${s.error}` : ""

    return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <InputSetValue
                    title={"MIN"}
                    value={min}
                    onChangeHandler={onChangeInputsValue}
                    className={classname}
                />
                <InputSetValue
                    title={"MAX"}
                    value={max}
                    onChangeHandler={onChangeInputsValue}
                    className={classname}
                />

            </div>
            <div className={s.counterButtons}>
                <MyButton
                    callback={() => props.setValue(min, max)}
                    children={'Set'}
                    disabled={!!classname}
                />
                <MyButton
                    callback={props.getValueFromLocalStorage}
                    children={'Get'}
                    disabled={!!classname}
                />
            </div>
        </div>
    )
}
