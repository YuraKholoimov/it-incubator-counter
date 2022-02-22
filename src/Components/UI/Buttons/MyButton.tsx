import React from "react";
import s from "./buttons.module.css"

export type MyButtonType = {
    children:string
    callback:()=>void
    disabled?:boolean
}

export default function MyButton(props:MyButtonType) {
    return (
            <div className={s.button}>
                <button onClick={props.callback} {...props}>{props.children}</button>
            </div>
    )
}