import {createSelector} from "reselect";
import {AppStateType} from "./Redux/redux-store";
import {UserReposytoryType, UsersType, UserType} from "./Types";

export const getUsers = (state: AppStateType) => {
    return state.userPage.users

}
export const getUsersSelector = createSelector(getUsers, (users: Array<UsersType>) => {
    return users
})

export const getMode = (state: AppStateType) => {
    return state.userPage.mode

}
export const getModeSelector = createSelector(getMode, (mode: boolean) => {
    return mode
})


export const getUser = (state: AppStateType) => {
    return state.userPage.user

}
export const getUserSelector = createSelector(getUser, (user: UserType) => {
    return user
})

export const getReposytorys = (state: AppStateType) => {
    return state.userPage.repos

}
export const getReposytorysSelector = createSelector(getReposytorys, (repos: Array<UserReposytoryType>) => {
    return repos
})

export const getReposytory = (state: AppStateType) => {
    return state.userPage.repo

}
export const getReposytorySelector = createSelector(getReposytory, (repo: UserReposytoryType ) => {
    return repo
})




