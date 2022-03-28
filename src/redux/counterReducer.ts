const initialState = {count: 0, valueInputMax: 0, valueInputStart: 0, edit: ''};


type ActionType = incACType | changeStartValueACType | changeMaxValueACType | resetACType |errorACType;
type initialStateType = typeof initialState;
type  incACType = ReturnType<typeof incAC>
type changeStartValueACType = ReturnType<typeof changeStartValueAC>
type changeMaxValueACType=ReturnType<typeof changeMaxValueAC>
type resetACType=ReturnType<typeof resetAC>
type errorACType=ReturnType<typeof errorAC>



export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INC': {
            return {...state, count: state.count + 1}
        }
        case 'CHANGE-START-VALUE': {
            return {...state, valueInputStart: action.value}
        }
        case 'CHANGE-MAX-VALUE': {
            return {...state, valueInputMax: action.value}
        }
        case 'RESET': {
            return {...state, valueInputStart:action.value}
        }
        case 'ERROR':
            return {...state,edit: action.text}
        default :
            return state;
    }
}
export const incAC = () => {
    return {
        type: 'INC'
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

export const resetAC=(value:number)=>{
    return{
        type:'RESET',
        value,
    }as const
}
export const errorAC=(text:string)=>{
    return{
        type:'ERROR',
        text,
    }as const
}

