import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";


type Props = {
    userLogin: string
    usersReposUrl: string
}


export const Reposytory: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const [repo, stateRepo] = useState([] as Array<any>)
    const [load, setLoad] = useState(false)

    const instance = axios.create({
        baseURL: ``,

    });

    const GitPes = {
        getReposetors() {
            return instance.get<Array<any>>(props.usersReposUrl).then(res => res.data)
        },
    }

    const getReposytory = () => {
        return async () => {
            let data = await GitPes.getReposetors()
            stateRepo(data)
        }
    }


    useEffect(() => {
        setLoad(true)
        dispatch(getReposytory())
        setLoad(false)
    }, [])

    return (
        <>
            {load == false ? <>{!repo.length ? 'ERROR' : ` Repo:  ${repo.length}`} </> : <p>Loading...</p>}
        </>
    )
}