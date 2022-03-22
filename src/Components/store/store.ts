import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {counterReducer} from "./counter-reduser";
import {setCounterReducer} from "./setCounter-reduser";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers( {
    counterValue: counterReducer,
    setCounter: setCounterReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem("stateOfCounter")
if (persistedTodosString) preloadedState = JSON.parse(persistedTodosString)


export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))


store.subscribe(() => {
    localStorage.setItem("stateOfCounter", JSON.stringify(store.getState()))
})