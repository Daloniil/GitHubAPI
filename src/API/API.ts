import axios from "axios";
import {UserReposytoryType, UsersType, UserType} from "../Types";

export const instance = axios.create({
    baseURL: `https://api.github.com/`,
});


export const GitHubAPI = {
    getUsers(name: string) {
        return instance.get<Array<UsersType>>(`search/users?q=${name}`).then(res => res.data)
    },
    getProfile(name: string) {
        return instance.get<UserType>(`users/${name}`).then(res => res.data)
    },
    getReposytorys(name: string) {
        return instance.get<Array<UserReposytoryType>>(`users/${name}/repos`).then(res => res.data)
    },
    getReposytory(name: string, repos: string) {
        return instance.get<UserReposytoryType>(`repos/${name}/${repos}`).then(res => res.data)
    },
}