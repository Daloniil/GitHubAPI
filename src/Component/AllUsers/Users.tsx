import React, {useEffect, useState} from "react";
import {UsersType, UserType} from "../../Types";
import {Reposytory} from "./Reposytory/Reposytory";
import {getUserSelector, getUsersSelector} from "../../users-selector";
import {actions, getProfile, getReposytorys, getUser} from "../../Redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import s from './StyleUsers/Users.module.css'

export const Users: React.FC = () => {
    const users = useSelector(getUsersSelector)
    const user = useSelector(getUserSelector)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')


    useEffect(() => {
        dispatch(getUser())
    }, [])

    useEffect(() => {
        dispatch(getProfile(value))
    }, [value])


    return (
        <div className={s.content}>
            <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
            {value == '' ?
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
                                <div>
                                    {users.login}
                                </div>
                                <div>
                                    <Reposytory userLogin={users.login}/>
                                </div>
                            </div>
                        );
                    }
                ) :
                <div key={user.id} className={s.container} onClick={() => {
                    dispatch(getProfile(user.login))
                    dispatch(getReposytorys(user.login))
                    dispatch(actions.setMode(true))
                }}>
                    <div>
                        <img src={user.avatar_url} alt="" width="75px" height="75px"/>
                    </div>
                    <div>
                        {user.login}
                    </div>
                    <div>
                        <Reposytory userLogin={user.login}/>
                    </div>
                </div>
            }
        </div>
    )
}
