import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css'

const Team = (props) => {
    const {strTeam,strSport, strTeamBadge, idTeam} = props.team;  

const cardStyle ={
    border: '4px solid lightGray',
    width: '400px',
    margin: '20px',
    borderRadius: '20px',
    boxShadow: '5px 5px 10px lightGray',
    padding: '20px',
    textAlign:'center',
}


    return (
        <div className="team-Style">
            <div>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title><h1>{strTeam}</h1></Card.Title>
                        <Card.Text> Sports Type: {strSport}</Card.Text>
                        <Link to={`/team/${idTeam}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Team;