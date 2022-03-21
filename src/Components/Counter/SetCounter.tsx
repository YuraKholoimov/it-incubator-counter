import React from "react";
import s from "./counter.module.css";
import MyButton from "../UI/Buttons/MyButton";
import InputSetValue from "../UI/Inputs/InputSetValue";
import {useDispatch, useSelector} from "react-redux";
import {setErrorAC, setValueAC} from "../store/counter-reduser";
import {ChangeMaxValueAC, ChangeMinValueAC, initialStateType} from "../store/setCounter-reduser";
import {AppStateType} from "../store/store";


export type SetCounterPropsType = {}

export function SetCounter(props: SetCounterPropsType) {
    const {min, max, error} = useSelector<AppStateType, initialStateType>(state => state.setCounter)

    const dispatch = useDispatch();

    // useEffect(() => {
    //     let storage = localStorage.getItem("counterValue")
    //     let {min, max} = storage &&JSON.parse(storage)
    //     // let {max, min } = props.counter
    //     inputsValue[0].value = min
    //     inputsValue[1].value = max
    //     props.setValue(min, max)
    //     setInputsValue([...inputsValue])
    //
    // }, [])

    const setValue = () => {
        if (min >= max) {
            dispatch(setErrorAC("Error"))
        } else {
            dispatch(setErrorAC(""))
            dispatch(setValueAC(min, max))
        }
    }

    const onChangeInputsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value, title}} = e

        if (title == "MIN")
            dispatch(ChangeMinValueAC(Number(value)))
        if (title == "MAX")
            dispatch(ChangeMaxValueAC(Number(value)))
    }

    return (
        <div className={s.containerCounter}>
            <div className={s.counterInput}>
                <InputSetValue
                    title={"MIN"}
                    value={min}
                    onChangeHandler={onChangeInputsValue}
                    className={error ? `${s.error}` : ""}
                />
                <InputSetValue
                    title={"MAX"}
                    value={max}
                    onChangeHandler={onChangeInputsValue}
                    className={error ? `${s.error}` : ""}
                />

            </div>
            <div className={s.counterButtons}>
                <MyButton
                    callback={setValue}
                    children={'Set'}
                    disabled={!!error}
                />
                <MyButton
                    children={'Get'}
                    disabled={!!error}
                />
            </div>
        </div>
    )
}

// const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let currentId = e.currentTarget.id
//     let currentValue = +e.currentTarget.value
//
//     let i = inputsValue.map(el => el.id).indexOf(currentId) + 1
//     if (i === 2) i -= 2
//
//     if (currentValue >= 0) {
//         setInputsValue([...inputsValue.map(input => input.id === currentId
//             ? {...input, value: currentValue, error: ""} : input)])
//
//         inputsValue[i].error = ""
//         props.showStatus('Enter values and press \"Set\"')
//     }
//
//     if (currentValue < 0 || currentId == "min" && currentValue >= inputsValue[i].value ||
//         currentId == "max" && currentValue <= inputsValue[i].value) {
//
//         setInputsValue([...inputsValue.map(i => i.id === currentId
//             ? {...i, value: currentValue, error: "Error"} : i)])
//
//         props.showStatus('Error')
//     }
// }
