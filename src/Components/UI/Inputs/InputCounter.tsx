import React from "react";
import s from "./inputCounter.module.css"

export type MyInputType = {
    counter: number
    status: string
    isMaxValue: boolean
}
export default function InputCounter(props: MyInputType) {
    return (
        <div className={s.counterInput}>
            <input
                type="text"
                value={props.status ? props.status : props.counter}
                className={props.isMaxValue ? `${s.inputText}` : ""}
            />
        </div>
    )
}