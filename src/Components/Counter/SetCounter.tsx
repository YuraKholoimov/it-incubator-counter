import React, {useState} from "react";
import "../../App.css";
import MyButton from "../UI/MyButton";
import InputSetValue from "../UI/InputSetValue";


type InputsValueType = {
    id: string,
    value: number,
    error: string
}
export type SetCounterPropsType = {
    setValue: (min: number, mux: number) => void
    showStatus: (status: string) => void
}

export default function SetCounter(props: SetCounterPropsType) {
    let [inputsValue, setInputsValue] = useState<Array<InputsValueType>>([
        {id: 'min', value: 0, error: ""},
        {id: 'max', value: 5, error: ""}
    ])

    const setValue = () => props.setValue(inputsValue[0].value, inputsValue[1].value)

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {

        let inputId = e.currentTarget.id
        let valueId = +e.currentTarget.value

        let i = inputsValue.map(el => el.id).indexOf(inputId) + 1
        if (i == 2) i -= 2

        if (valueId >= 0) {
            setInputsValue([...inputsValue.map(input => {
                if (input.id === "min" && valueId < inputsValue[i].value) {
                    return {...input, value: valueId, error: ""}
                } else if (input.id === "max" && valueId > inputsValue[i].value) {
                    return {...input, value: valueId, error: ""}
                } else {
                    return input
                }
            })])
            props.showStatus('Enter values and press set')

        } else if (valueId < 0){
            setInputsValue([...inputsValue.map(input => {
                if (input.id == inputId) {
                    return {...input, error: "Error"}
                } else {
                    return input
                }
            })])
        }
    }


    return (
        <div className={"containerCounter"}>
            <div>
                {inputsValue.map(input => {
                    return <InputSetValue
                        id={input.id}
                        value={input.value}
                        changeMinValue={changeValue}
                        changeMaxValue={changeValue}
                        className={input.error ? "error" : ""}
                    />
                })}
            </div>
            <div className={"counterButtons"}>
                <MyButton
                    callback={setValue}
                    children={'set'}
                    disabled={!!inputsValue[0].error}
                />
            </div>
        </div>
    )
}