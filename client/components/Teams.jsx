/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Teams = (props) => {

  const [currentTeam, addTeam] = useState([]);

  useEffect(() => {
    axios.get('/players/leaders')
    .then((response) => {
      console.log(response.data);
      addTeam(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [currentTeam])


  return (
    <div>
    <div>Teams</div>
    {props.team.map((item, index) => {
      const {name, id, FP} = item;
      return (
        <>
        <div>{name}</div>
        <div>{FP}</div>
        </>
      )
    })}
    </div>
  )
}


export default Teams;