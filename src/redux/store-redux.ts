import {counterReducer} from "./counterReducer";
import { combineReducers, createStore} from "redux";
import {loadState, saveState} from "../utils/localStorageUtils";

const rootReducer = combineReducers({
   counter: counterReducer ,
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,loadState());
// определить автоматически тип всего объекта состояния

store.subscribe(()=>{ // при изменени стора будет отрабатывать этот колбэк
 saveState({counter: store.getState().counter })//сохраняем весь стор
       //но можем конкретное value сохранить:
})


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;