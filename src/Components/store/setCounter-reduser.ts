import {Dispatch} from "redux";

//------- ACTION CREATORS TYPE
export type ActionTypes = ReturnType<typeof ChangeMinValueAC>
    | ReturnType<typeof ChangeMaxValueAC>
    | ReturnType<typeof ResetValueAC>
    | ReturnType<typeof SetValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof SetValueFromLocalStorageAC>


//-------- INITIAL STATE
export type initialStateSetCounterType = typeof initialState
const initialState = {min: 0, max: 5, error: ""}

//--------- ACTION CREATORS
export const ChangeMinValueAC = (value: number) => ({
    type: "CHANGE-MIN-VALUE", value} as const)
export const ChangeMaxValueAC = (value: number) => ({
    type: "CHANGE-MAX-VALUE", value} as const)
export const ResetValueAC = () => ({
    type: "RESET-VALUE"} as const)
export const SetValueAC = (min: number, max: number) => ({
    type: "SET-VALUE", min, max} as const)
export const SetValueFromLocalStorageAC = (min: number, max: number) => ({
    type: "SET-VALUE-FROM-LOCALSTORAGE", min, max} as const)
export const setErrorAC = (error: string) => ({
    type: "SET-ERROR", error} as const)

//--------- REDUCER of COUNTER VALUE
export const setCounterReducer = (
    state: initialStateSetCounterType = initialState,
    action: ActionTypes
): initialStateSetCounterType => {
    switch (action.type) {
        case "CHANGE-MIN-VALUE":
            return {...state, min: action.value}
        case "CHANGE-MAX-VALUE":
            return {...state, max: action.value}
        case "RESET-VALUE":
            return {...state, min: 0, max: 5}
        case "SET-VALUE":
            return {...state, min: action.min, max: action.max}
        case "SET-VALUE-FROM-LOCALSTORAGE":
            return {...state, min: action.min, max: action.max}
        case "SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

//---------THUNK
// export const setValueSetCounterTC = (min: number, max: number) => (dispatch: Dispatch) => {
//     localStorage.setItem("counter", JSON.stringify({min, max}))
//     dispatch(SetValueAC(min, max))
// }
// export const getValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     const response = localStorage.getItem("counter")
//     const {min, max} = response && JSON.parse(response)
//     dispatch(SetValueAC(min, max))
// }
