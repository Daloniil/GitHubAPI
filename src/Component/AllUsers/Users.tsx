import React, {useEffect, useState} from "react";
import {UsersType} from "../../Types";
import {Reposytory} from "./Reposytory/Reposytory";
import {getUsersSelector} from "../../users-selector";
import {actions, getProfile, getReposytorys, getUser} from "../../Redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import s from './StyleUsers/Users.module.css'

export const Users: React.FC = () => {
    const users = useSelector(getUsersSelector)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [load, setLoad] = useState(false)


    useEffect(() => {
        setLoad(true)
        dispatch(getUser('A'))
        setLoad(false)
    }, [])

    useEffect(() => {
        dispatch(getUser(value))
    }, [value])


    return (
        <div className={s.content}>
            <input type="text" onChange={e => setValue(e.target.value)} value={value} className={s.input}
                   placeholder={"Search for Users"}/>
            {load == false ?
                users.map((users: UsersType) => {
                        return (
                            <div key={users.id} className={s.container} onClick={() => {
                                dispatch(getProfile(users.login))
                                dispatch(getReposytorys(users.login))
                                dispatch(actions.setMode(true))
                            }}>
                                <div>
                                    <img src={users.avatar_url} alt="" width="75px" height="75px"/>
                                </div>
                                <div className={s.name}>
                                    {users.login}
                                </div>
                                <div className={s.repo}>
                                    <Reposytory userLogin={users.login} usersReposUrl={users.repos_url}/>
                                </div>
                            </div>
                        );
                    }
                ) :
                <p>Loading...</p>}

        </div>
    )
}
