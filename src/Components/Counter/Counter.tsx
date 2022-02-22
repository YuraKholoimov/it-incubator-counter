import React from "react";
import "../../App.css";
import InputCounter from "../UI/Inputs/InputCounter";
import MyButton from "../UI/Buttons/MyButton";
import s from "./counter.module.css"

export type CounterType = {
    value: number
    status: string
    incHandler: () => void
    resetHandler: (min?: number) => void
    isMaxValue: boolean
}

export const Counter: React.FC<CounterType> = (props) => {
    return (
        <div className={s.containerCounter}>
            <div>
                <InputCounter
                    counter={props.value}
                    status={props.status}
                    isMaxValue={props.isMaxValue}
                />
            </div>
            <div className={s.counterButtons}>
                <MyButton
                    callback={props.incHandler}
                    children={'inc'}
                    disabled={props.isMaxValue || !!props.status}
                />
                <MyButton
                    callback={props.resetHandler}
                    children={'reset'}
                    disabled={!!props.status}
                />
            </div>
        </div>
    )
}