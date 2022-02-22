import React from "react";

export type MyButtonType = {
    children:string
    callback:()=>void
    disabled?:boolean
}

export default function MyButton(props:MyButtonType) {
    return (
        <button onClick={props.callback} {...props}>{props.children}</button>
    )
}