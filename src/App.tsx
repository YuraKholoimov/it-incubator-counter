import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import SetCounter from "./Components/Counter/SetCounter";

export type CounterType = {
    min: number
    max: number
    status: string
}

export default function App() {
    let [counter, setCounter] = useState<CounterType>({
        min: 0, max: 5, status: ""
    })

    useEffect(() => {
        let storage = localStorage.getItem("counterValue")
            let {min, max} = storage &&JSON.parse(storage)
            setCounter({...counter, min, max})
    }, [])

    const getLocalStorageValue = () => {
        let valet = localStorage.getItem("counterValue")
        let {min, max} = valet && JSON.parse(valet)
        setCounter({...counter, min, max})
    }

    const incHandler = () => {
        if (counter.min < counter.max) {
            setCounter({...counter, min: ++counter.min})
        }
    };

    const setValue = (min: number, max: number) => {
        localStorage.setItem("counterValue", JSON.stringify({min, max}))
        setCounter({...counter, min, max, status: ""})
    }
    const resetHandler = () => {
        setCounter({...counter, min: 0, max: 5})
        localStorage.clear()
    }

    const showStatus = (status: string) => setCounter({...counter, status})

    let isMaxValue = counter.min == counter.max || counter.status == "Error"

    return (
        <div className={"App"}>
            <Counter
                value={counter.min}
                isMaxValue={isMaxValue}
                status={counter.status}
                incHandler={incHandler}
                resetHandler={resetHandler}
            />
            <SetCounter
                counter={counter}
                setValue={setValue}
                showStatus={showStatus}
                getLocalStorageValue={getLocalStorageValue}
            />
        </div>
    );
};
