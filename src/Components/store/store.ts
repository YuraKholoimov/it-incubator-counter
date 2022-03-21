import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {counterReducer} from "./counter-reduser";
import {setCounterReducer} from "./setCounter-reduser";


const rootReducer = combineReducers( {
    counterValue: counterReducer,
    setCounter: setCounterReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export type storeAppType = typeof store

export const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())