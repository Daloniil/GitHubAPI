import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getReposytorySelector, getReposytorysSelector, getUserSelector} from "../../users-selector";
import {actions, getReposytory} from "../../Redux/users-reducer";
import {UserReposytoryType} from "../../Types";
import s from './StyleUser/User.module.css'


export const User: React.FC = () => {
    const user = useSelector(getUserSelector)
    const repos = useSelector(getReposytorysSelector)
    const repo = useSelector(getReposytorySelector)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReposytory(user.login, value))

    }, [value])

    return (
        <div className={s.content}>
            <button className={s.exit} onClick={() => {
                dispatch(actions.setMode(false))
            }}>X
            </button>
            <p>GitHub Search</p>

            <div className={s.profile}>
                <div className={s.img}>
                    <img src={user.avatar_url} alt="" width="150px" height="150px"/>
                </div>
                <div className={s.profile_info}>
                    <p>{user.login}</p>
                    <p>{user.email == null ? "" : `Email:${user.email}`}</p>
                    <p> {user.location == null ? "" : `Location:${user.location}`}</p>
                    <p>Join Date: {user.created_at}</p>
                    <p>{user.followers} Followers</p>
                    <p>Following {user.following}</p>

                </div>

            </div>
            <div className={s.bio}>
                <p>{user.bio}</p>
            </div>
            <input type="text" onChange={e => setValue(e.target.value)} value={value}
                   placeholder={"Search for Users's Repositories"} className={s.input}/>
            <div>
                {value == '' ?
                    repos.map((repos: UserReposytoryType) => {
                            return (
                                <div className={s.repos_info}>
                                    <div className={s.repos_name}>
                                        {repos.name}
                                    </div>
                                    <div className={s.repos_stats}>
                                        <div className={s.stats_forks}>
                                            {repos.forks} Forks
                                        </div>
                                        <div className={s.stats_stars}>
                                            {repos.stargazers_count} Stars
                                        </div>
                                    </div>
                                </div>

                            );
                        }
                    ) :
                    <div>
                        {!repo.name ?
                            <div className={s.not_found}>
                                <p>NOT FOUND</p>
                            </div> :
                            <div className={s.repos_info}>
                                <div className={s.repos_name}>
                                    {!repo.name ? "" : repo.name}
                                </div>
                                <div className={s.repos_stats}>
                                    <div className={s.stats_forks}>
                                        {!repo.forks ? "0" : `${repo.forks} Forks`}
                                    </div>
                                    <div className={s.stats_stars}>
                                        {!repo.stargazers_count ? "0" : `${repo.stargazers_count} Stars`}
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                }

            </div>
        </div>
    )
}