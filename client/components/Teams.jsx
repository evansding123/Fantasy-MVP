/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamTable from './TeamTable.jsx';



const Teams = (props) => {

  const [currentTeam, addTeam] = useState([]);

  useEffect(() => {
    axios.get('/teams/get')
    .then((response) => {
      console.log(response);
      addTeam(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  if(currentTeam.length === 0 && props.team.length === 0) {
    return (
      <div>Add a Team!</div>
    );
  }


  return (
    <div>
    <h4>Saved Teams</h4>
    <div className = 'players'>
        {currentTeam.map((item) => {
          return(
            <TeamTable info = {item.team} key = {item.id}/>
          );
        })}
    </div>
    <div>
      <h4>Current Team</h4>
      <TeamTable info = {props.team} />
    </div>
    </div>
  )
}


export default Teams;