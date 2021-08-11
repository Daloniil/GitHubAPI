import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getReposytorySelector, getReposytorysSelector, getUserSelector} from "../../users-selector";
import {actions, getReposytory} from "../../Redux/users-reducer";
import {UserReposytoryType} from "../../Types";


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
        <div>
            <button onClick={() => {
                dispatch(actions.setMode(false))
            }}>Exit
            </button>
            <div>
                <div>
                    <img src={user.avatar_url} alt="" width="100px" height="100px"/>
                </div>
                <div>
                    <p>{user.login}</p>
                    <p>{user.email == null ? "" : `Email:${user.email}`}</p>
                    <p> {user.location == null ? "" : `Location:${user.location}`}</p>
                    <p>Join Date: {user.created_at}</p>
                    <p>{user.followers} Followers</p>
                    <p>Following {user.following}</p>
                </div>
            </div>
            <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <div>
                {value == '' ?
                    repos.map((repos: UserReposytoryType) => {
                            return (
                                <div>
                                    <div>
                                        {repos.name}
                                    </div>
                                    <div>
                                        {repos.forks}
                                        <br/>
                                        {repos.stargazers_count}
                                    </div>
                                </div>

                            );
                        }
                    ) :
                    <div>
                        <div>
                            {!repo.name ? "" : repo.name}
                        </div>
                        <div>
                            {!repo.forks ? "NOT FOUND" : `${repo.forks} Forks`}
                            <br/>
                            {!repo.stargazers_count ? "" : `${repo.stargazers_count} Stars`}
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}