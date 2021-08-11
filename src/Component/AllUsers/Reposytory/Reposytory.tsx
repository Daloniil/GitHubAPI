import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {instance} from "../../../API/API";


type Props = {
    userLogin: string
}
type ReposytoryLenghtType = {
    public_repos: number
}


export const Reposytory: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const [repo, stateRepo] = useState({} as ReposytoryLenghtType)

    const GitPes = {
        getReposetors(name: string) {
            return instance.get<ReposytoryLenghtType>(`users/${name}`).then(res => res.data)
        },
    }

    const getReposytory = (name: string) => {
        return async () => {
            let data = await GitPes.getReposetors(name)
            stateRepo(data)
        }
    }


    useEffect(() => {
        dispatch(getReposytory(props.userLogin))
    }, [])

    return (
        <div>
            Repo: {repo.public_repos}
        </div>
    )
}