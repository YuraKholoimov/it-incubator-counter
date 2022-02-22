import React from "react";
import "../../App.css";
import InputCounter from "../UI/InputCounter";
import MyButton from "../UI/MyButton";

export type CounterType = {
    value: number
    status:string
    maxValue:number
    incHandler: () => void
    resetHandler: (min?:number) => void
}

export const Counter: React.FC<CounterType> = (props) => {
   let disabled = props.value == props.maxValue  || !!props.status
    return (
        <div className={"containerCounter"}>
            <div >
                     <InputCounter
                         counter={props.value}
                         maxValue={props.maxValue}
                         status={props.status}
                     />
            </div>
            <div className={"counterButtons"}>
                <MyButton
                    callback={props.incHandler}
                    children={'inc'}
                    disabled={disabled}
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