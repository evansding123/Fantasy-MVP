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


  return (
    <div>
    <div>Teams</div>
    <div className = 'players'>
        {currentTeam.map((item) => {
          return(
            <TeamTable info = {item.team} key = {item.id}/>
          );
        })}
    </div>
    </div>
  )
}


export default Teams;