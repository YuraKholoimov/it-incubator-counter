
//------- ACTION CREATORS TYPE


export type ActionTypes = ReturnType<typeof ChangeMinValueAC>
| ReturnType<typeof ChangeMaxValueAC>
| ReturnType<typeof ResetValueAC>


//-------- INITIAL STATE
export type initialStateType = typeof initialState
const initialState = {min: 0, max: 5, error: ""}

//--------- ACTION CREATORS
export const ChangeMinValueAC = (value: number) => ({type: "CHANGE-MIN-VALUE", value} as const)
export const ChangeMaxValueAC = (value: number) => ({type: "CHANGE-MAX-VALUE", value} as const)
export const ResetValueAC = () => ({type: "RESET-VALUE"} as const)


//--------- REDUCER of COUNTER VALUE
export const setCounterReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "CHANGE-MIN-VALUE":
            return {...state, min: action.value}
        case "CHANGE-MAX-VALUE":
            return {...state, max: action.value}
        case "RESET-VALUE":
            return {...state, min: 0, max: 5}
        default:
            return state
    }
}

//---------THUNK

