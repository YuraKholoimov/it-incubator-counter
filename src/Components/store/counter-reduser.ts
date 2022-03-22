//------- ACTION CREATORS TYPE
export type ActionTypes = ReturnType<typeof ChangeValueAC>
    | ReturnType<typeof ResetValueAC>
    | ReturnType<typeof setValueFromLocalStorageAC>
    | ReturnType<typeof SetValueAC>
    | ReturnType<typeof ChangeMinValueAC>
    | ReturnType<typeof ChangeMaxValueAC>

//-------- INITIAL STATE
export type initialStateType = typeof initialState
const initialState = {min: 0, max: 5, status: ""}

//--------- ACTION CREATORS
export const ChangeValueAC = () => ({type: "CHANGE-VALUE"} as const)
export const ResetValueAC = () => ({type: "RESET-VALUE"} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: "VALUE-FROM-LS", value} as const)
export const SetValueAC = (min: number, max: number) => ({type: "SET-VALUE", min, max} as const)
export const ChangeMinValueAC = (value: number) => ({
    type: "CHANGE-MIN-VALUE", value} as const)
export const ChangeMaxValueAC = (value: number) => ({
    type: "CHANGE-MAX-VALUE", value} as const)

//--------- REDUCER of COUNTER VALUE
export const counterReducer = (
    state: initialStateType = initialState,
    action: ActionTypes
): initialStateType => {
    switch (action.type) {
        case "CHANGE-MIN-VALUE":
            return {...state, min: action.value}
        case "CHANGE-MAX-VALUE":
            return {...state, max: action.value}
        case "CHANGE-VALUE":
            return {...state, min: ++state.min}
        case "SET-VALUE":
            return {...state, min: action.min, max: action.max}
        case "VALUE-FROM-LS":
            return {...state, min: action.value}


        default:
            return state
    }
}



