import React, {useState} from "react";

export type InputSetValueType = {
    value: number
    id:string
    className: string
    changeMinValue:(e: React.ChangeEvent<HTMLInputElement>)=>void
    changeMaxValue:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

export default function InputSetValue(props: InputSetValueType) {
    return (
        <>
            <input
                key={props.id}
                type="number"
                // value={switcher.min}
                onChange={props.changeMinValue}
                {...props}
            />
        </>
    )
}