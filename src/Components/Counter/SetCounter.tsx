import React from "react";
import s from "./counter.module.css";
import MyButton from "../UI/Buttons/MyButton";
import InputSetValue from "../UI/Inputs/InputSetValue";
import {useDispatch, useSelector} from "react-redux";
import {SetValueFromLocalStorageAC} from "../store/setCounter-reduser";
import {AppStateType} from "../store/store";
import {initialStateType} from "../store/counter-reduser";

export type SetCounterPropsType = {
    status: string
    classname: string
    setValue: (min: number, max: number) => void
    onChangeInputsValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SetCounter(props: SetCounterPropsType) {
    const dispatch = useDispatch();
    const {min, max} = useSelector<AppStateType, initialStateType>(state => state.counterValue)

    const getValue = () =>  dispatch(SetValueFromLocalStorageAC(min, max))

    return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <InputSetValue
                    title={"MIN"}
                    value={min}
                    onChangeHandler={props.onChangeInputsValue}
                    className={props.classname}
                />
                <InputSetValue
                    title={"MAX"}
                    value={max}
                    onChangeHandler={props.onChangeInputsValue}
                    className={props.classname}
                />

            </div>
            <div className={s.counterButtons}>
                <MyButton
                    callback={() => props.setValue(min, max)}
                    children={'Set'}
                    disabled={!!props.classname}
                />
                <MyButton
                    callback={getValue}
                    children={'Get'}
                    disabled={!!props.classname}
                />
            </div>
        </div>
    )
}
