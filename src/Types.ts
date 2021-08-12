export type UsersType = {
    login: string
    id: number,
    avatar_url: string,
}


export type UserType = {
    login: string
    id: number,
    avatar_url: string,
    email: string | null,
    location: string | null,
    created_at: string,
    followers: number,
    following: number
    bio: string
}


export type UserReposytoryType = {
    id: number,
    name: string,
    forks: number,
    stargazers_count: number
}


