import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import SetCounter from "./Components/Counter/SetCounter";

export type CounterType = {
    min:number
    max:number
    status:string
}

export default function App() {
    let [counter, setCounter] = useState<CounterType>({
        min: 0, max: 5, status: ""
    })
    console.log(counter)

    const incHandler = () => {
        if (counter.min < counter.max) {
            setCounter({...counter, min: ++counter.min})
        }
    };

    const resetHandler = () => setCounter({...counter, min: 0, max: 5})

    const setValue = (min: number, max:number) => {
        setCounter({...counter, min, max, status: ""})
    }

    const showStatus = (status:string) => {
        setCounter({...counter,status})
    }

    return (
        <div className={"App"}>
            <Counter
                status={counter.status}
                value={counter.min}
                maxValue={counter.max}
                incHandler={incHandler}
                resetHandler={resetHandler}
            />
            <SetCounter
                setValue={setValue}
                showStatus={showStatus}
            />
        </div>
    );
};
