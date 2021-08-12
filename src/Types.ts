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


export const typeColors: any = {
    '10': '#53a4cf',
    '100': '#7b62a3',
    '500': '#b97fc9',
    '1000': '#fd7d24',
    '2000': '#a4acaf',
    '5000': '#729f3f',
    '8000': '#f7de3f',
    '10000': '#eed535',
    '20000': '#FFFFF0',
    '50000': '#eed535',
    '100000': '#191970',
    '500000': '#C71585',
    '1000000': '#4B0082',

}