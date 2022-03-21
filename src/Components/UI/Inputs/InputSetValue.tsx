import React, {useState} from "react";
import s from "./inputSetValue.module.css"

export type InputSetValueType = {
    title: string
    value?: number
    className: string
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputSetValue(props: InputSetValueType) {
    return (
        <div className={s.inputContainer}>
            <div className={s.titleSetInput}>{`${props.title}:`}</div>
            <div>

                <input
                    type="number"
                    onChange={props.onChangeHandler}
                    {...props}
                />

            </div>
        </div>
    )
}