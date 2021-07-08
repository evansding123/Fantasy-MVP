/* eslint-disable react/prop-types */
import React from 'react';
import InnerTable from './InnerTable.jsx';


const TeamTable = (props) => {


  return(
  <table className = 'teams'>
    <thead>
        <tr className = 'row'>
          <th>Player</th>
          <th>Position</th>
          <th>FG</th>
          <th>FT</th>
          <th>3PM</th>
          <th>PTS</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
          <th>TO</th>
          <th>Fantasy Pts</th>
        </tr>
      </thead>
      <tbody>
        {props.info.map((item) => {
          return (
            <InnerTable info = {item} key = {item._id}/>
          )
        })}
      </tbody>
  </table>

  )

}


export default TeamTable;