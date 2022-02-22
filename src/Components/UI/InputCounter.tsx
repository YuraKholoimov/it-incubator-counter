import React from "react";

export type MyInputType= {
    counter:number
    status:string
    maxValue:number
}
export default function InputCounter(props:MyInputType) {
    return (
        <div className={"counterInput"}>
            <input
            value={props.status ? props.status : props.counter}
            type="text"
            className={props.counter === props.maxValue ? "inputText" : ""}
        />
        </div>
    )
}