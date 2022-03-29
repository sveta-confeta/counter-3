const initialState = {count: 0, valueInputMax: 0, valueInputStart: 0};


type ActionType = incACType | changeStartValueACType | changeMaxValueACType;
type initialStateType = typeof initialState;
type  incACType = ReturnType<typeof countAC>
type changeStartValueACType = ReturnType<typeof changeStartValueAC>
type changeMaxValueACType=ReturnType<typeof changeMaxValueAC>





export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INC': {
            return {...state, count: action.value}
        }
        case 'CHANGE-START-VALUE': {
            return {...state, valueInputStart: action.value}
        }
        case 'CHANGE-MAX-VALUE': {
            return {...state, valueInputMax: action.value}
        }


        default :
            return state;
    }
}
export const countAC = (value:number) => {
    return {
        type: 'INC',
        value
    } as const
}
export const changeStartValueAC = (value: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        value,
    } as const
}

export const changeMaxValueAC=(value:number)=>{
    return{
     type:   'CHANGE-MAX-VALUE',
        value,
    }as const
}




