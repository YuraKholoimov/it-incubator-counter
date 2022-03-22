//------- ACTION CREATORS TYPE
export type ActionTypes = ReturnType<typeof ChangeValueAC>
    | ReturnType<typeof ResetValueAC>
    | ReturnType<typeof setValueFromLocalStorageAC>
    | ReturnType<typeof SetValueAC>
    | ReturnType<typeof setErrorAC>

//-------- INITIAL STATE
export type initialStateType = typeof initialState
const initialState = {min: 0, max: 5, status: ""}

//--------- ACTION CREATORS
export const ChangeValueAC = () => ({type: "CHANGE-VALUE"} as const)
export const ResetValueAC = () => ({type: "RESET-VALUE"} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: "VALUE-FROM-LS", value} as const)
export const SetValueAC = (min: number, max: number) => ({type: "SET-VALUE", min, max} as const)
export const setErrorAC = (error: string) => ({type: "SET-ERROR", error} as const)

//--------- REDUCER of COUNTER VALUE
export const counterReducer = (
    state: initialStateType = initialState,
    action: ActionTypes
): initialStateType => {
    switch (action.type) {
        case "CHANGE-VALUE":
            return {...state, min: ++state.min}
        case "RESET-VALUE":
            return {...state, min: 0, max: 5}
        case "SET-VALUE":
            return {...state, min: action.min, max: action.max}
        case "VALUE-FROM-LS":
            return {...state, min: action.value}
        case "SET-ERROR":
            return {...state, status: action.error}
        default:
            return state
    }
}



