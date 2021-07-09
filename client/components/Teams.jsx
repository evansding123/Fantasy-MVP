/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamTable from './TeamTable.jsx';
import Button from '@material-ui/core/Button';



const Teams = (props) => {

  const [currentTeam, addTeam] = useState([]);
  const [refresh, refreshWindow] = useState(0)

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


  const handleDelete = (id) => {
    axios.delete('teams/delete', {
      params: {endpoint: id}
    })
    .then((response) => {
      console.log(response);
      refreshWindow(refresh +1);

    })
    .catch((err) => {
      console.log(err);
    })
  }




  return (
    <div>
    <h4>Saved Teams</h4>
    <div className = 'players'>
        {currentTeam.map((item) => {
          return(
            <TeamTable info = {item.team} key = {item.id} id = {item._id} callback = {handleDelete}/>
          );
        })}
    </div>
    <div>
      <h4>Current Team</h4>
      <TeamTable info = {props.team} />
    </div>
    {/* <Button variant = 'outlined' color = 'primary' onClick = {this.handleClick}>Add</Button> */}
    </div>
  )
}


export default Teams;