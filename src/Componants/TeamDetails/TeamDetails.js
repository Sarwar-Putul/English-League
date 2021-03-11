import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faFacebook, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetails = () => {
    const {teamId}= useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setTeam(data.teams[0]))
    }, []);

    const {strTeam, intFormedYear, strTeamLogo,strCountry,strSport, strGender, strDescriptionEN} = team;

    const clubType = team.strGender;

    return (
        <div className="team-container">
            <div className="team-logo">
                <img src={strTeamLogo} alt=""/>
            </div>
            <div>
                <div className="team-status">
                        <div>
                            <h1>{strTeam}</h1>
                            <p><FontAwesomeIcon icon={faCalendarAlt} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</p>
                        </div>
                        <div className="type-picture">
                            {
                                clubType ? <img style={{ height:240, width:442, }} src="https://e0.365dm.com/20/12/2048x1152/skysports-premier-league-tottenham_5206561.jpg" alt=""/> : <img style={{ height:240, width:442, }} src="https://assets.manutd.com/AssetPicker/images/0/0/10/212/709671/WT-Social-Posts-V2-Square-Post_MID31531489570113_large.jpg" alt=""/>
                            }
                        </div>
                </div>
                <div className="description">
                    <p><small>{strDescriptionEN}</small></p>
                    <p><small>{strDescriptionEN}</small></p>
                </div>
                <div className="social-media">
                    <Link to ={"https://www.facebook.com"}><FontAwesomeIcon icon={faFacebook} /> </Link>
                    <Link to ={"https://twitter.com"}><FontAwesomeIcon icon={faTwitterSquare} /> </Link>
                    <Link to ={"https://youtube.com"}><FontAwesomeIcon icon={faYoutube} /> </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;