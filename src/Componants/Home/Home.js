import React, { useEffect, useState} from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        let url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeams(data.teams));
    }, []);
    return (
        <div>
            <div className="header">
                <h1 >English League</h1>
            </div>
            <div className="container">
                {
                    teams.map(team=> <Team team={team}></Team>)
                }
            </div>
            
        </div>
    );
};

export default Home;