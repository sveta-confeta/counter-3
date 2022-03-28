
const initialState={count:0};
type ActionType=btn_incACType;
    type initialStateType=typeof initialState;
    type  btn_incACType=ReturnType<typeof  btn_incAC>

export const counterReducer=(state:initialStateType=initialState,action:ActionType):initialStateType=>{
    switch (action.type){
        case '...':{
            return ...state
        }
    } default :
        return state;
}
export const  btn_incAC=()=>{
    return{
        type:'BTN-INC'
    }

}
