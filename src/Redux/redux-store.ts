import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMidleware, {ThunkAction} from "redux-thunk"
import {usersReducer} from "./users-reducer";


let reducers = combineReducers({
    userPage: usersReducer
});


type RootReducerType = typeof reducers

export type AppStateType = ReturnType<RootReducerType>


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


export  type actionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMidleware)));

// @ts-ignore
window.__store__ = store
export default store;