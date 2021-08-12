import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import {Users} from "./Component/AllUsers/Users";
import {getModeSelector} from "./users-selector";
import {User} from "./Component/User/User";

const App: React.FC = () => {


    const mode = useSelector(getModeSelector)

    return (
        <div className="App">
            <p>GitHub Search</p>

            {mode == false ? <Users/> : <User/>}
        </div>
    );
}

export default App;


