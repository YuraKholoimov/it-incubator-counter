import React, {useState} from "react";
import s from "./inputSetValue.module.css"

export type InputSetValueType = {
    title: string
    value: number
    id: string
    className: string
    changeMinValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputSetValue(props: InputSetValueType) {
    return (
        <div className={s.inputContainer}>
            <div className={s.titleSetInput}>{`${props.title}:`}</div>
            <div>
                <input
                    key={props.id}
                    type="number"
                    onChange={props.changeMinValue}
                    {...props}
                />
            </div>
        </div>
    )
}