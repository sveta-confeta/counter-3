import {AppRootStateType} from "../redux/store-redux";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
//типизация стейта -это типизация рутРедьюсера:
export const saveState = (state:AppRootStateType) => { //функция для сохранения стейта
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state', serializedState);
    } catch {
        // ignore write errors
    }
};

