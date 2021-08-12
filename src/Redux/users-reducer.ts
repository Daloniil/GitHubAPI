import {actionsType, BaseThunkType} from "./redux-store";
import {GitHubAPI} from "../API/API";
import {UserReposytoryType, UsersType, UserType} from "../Types";

let initialState = {
    users: [] as Array<UsersType>,
    user: {} as UserType,
    repos: [] as Array<UserReposytoryType>,
    repo: {} as UserReposytoryType,
    mode: false as boolean

};

export type initialStateType = typeof initialState


export const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "GH/USER-REDUCER-TAKEUSERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case "GH/USER-REDUCER-SETUSER": {
            return {
                ...state,
                user: action.user
            }
        }
        case "GH/USER-REDUCER-SETREPOS": {
            return {
                ...state,
                repos: action.repos
            }
        }
        case "GH/USER-REDUCER-SETREPO": {
            return {
                ...state,
                repo: action.repo
            }
        }
        case 'GH/USER-REDUCER-SETMOD': {
            return {
                ...state,
                mode: action.mod
            }
        }

        default:
            return state;
    }
}

type ActionsTypes = actionsType<typeof actions>


export const actions = {
    setUsers: (users: Array<UsersType>) => {
        return {
            type: 'GH/USER-REDUCER-TAKEUSERS',
            users
        } as const
    },
    setUser: (user: UserType) => {
        return {
            type: 'GH/USER-REDUCER-SETUSER',
            user
        } as const
    },
    setReposytorys: (repos: Array<UserReposytoryType>) => {
        return {
            type: 'GH/USER-REDUCER-SETREPOS',
            repos
        } as const
    },
    setReposytory: (repo: UserReposytoryType) => {
        return {
            type: 'GH/USER-REDUCER-SETREPO',
            repo
        } as const
    },
    setMode: (mod: boolean) => {
        return {
            type: 'GH/USER-REDUCER-SETMOD',
            mod
        } as const
    }

}


type ThunkType = BaseThunkType<ActionsTypes>


export const getUser = (): ThunkType => {
    return async (dispatch) => {
        let data = await GitHubAPI.getUsers()
        dispatch(actions.setUsers(data))
    }
}

export const getProfile = (name: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setUser({} as UserType))
        let data = await GitHubAPI.getProfile(name)
        dispatch(actions.setUser(data))
    }
}

export const getReposytorys = (name: string): ThunkType => {
    return async (dispatch) => {
        let data = await GitHubAPI.getReposytorys(name)
        dispatch(actions.setReposytorys(data))
    }
}

export const getReposytory = (name: string, repos: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setReposytory({} as UserReposytoryType))
        let data = await GitHubAPI.getReposytory(name, repos)
        dispatch(actions.setReposytory(data))
    }
}




