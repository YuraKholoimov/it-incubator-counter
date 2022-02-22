import React, {useState} from "react";
import s from "./counter.module.css";
import MyButton from "../UI/Buttons/MyButton";
import InputSetValue from "../UI/Inputs/InputSetValue";

type InputsValueType = {
    id: string
    title: string
    value: number
    error: string
}
export type SetCounterPropsType = {
    setValue: (min: number, mux: number) => void
    showStatus: (status: string) => void
}

export default function SetCounter(props: SetCounterPropsType) {
    let [inputsValue, setInputsValue] = useState<Array<InputsValueType>>([
        {id: 'min', title: "start value", value: 0, error: ""},
        {id: 'max', title: "max value", value: 0, error: ""}
    ])

    const setValue = () => props.setValue(inputsValue[0].value, inputsValue[1].value)

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let currentId = e.currentTarget.id
        let currentValue = +e.currentTarget.value

        let i = inputsValue.map(el => el.id).indexOf(currentId) + 1
        if (i == 2) i -= 2

        if (currentValue >= 0) {
            console.log(currentValue)
            setInputsValue([...inputsValue.map(input => input.id === currentId
                ? {...input, value: currentValue, error: ""} : input)])
            inputsValue[i].error = ""
            props.showStatus('Enter values and press \"Set\"')
        }

        if (currentValue < 0 || currentId == "min" && currentValue >= inputsValue[i].value ||
            currentId == "max" && currentValue <= inputsValue[i].value) {

            setInputsValue([...inputsValue.map(i => i.id === currentId
                ? {...i, value: currentValue, error: "Error"} : i)])

            props.showStatus('Error')
        }
    }

    return (
        <div className={s.containerCounter}>

            <div className={s.counterInput}>
                {
                    inputsValue.map(input => {
                        return <InputSetValue
                            title={input.title}
                            id={input.id}
                            value={input.value}
                            changeMinValue={changeValue}
                            changeMaxValue={changeValue}
                            className={input.error ? `${s.error}` : ""}
                        />
                    })}
            </div>
            <div className={s.counterButtons}>
                <MyButton
                    callback={setValue}
                    children={'set'}
                    disabled={!!inputsValue[0].error}
                />
            </div>
        </div>
    )
}