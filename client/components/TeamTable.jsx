/* eslint-disable react/prop-types */
import React from 'react';
import InnerTable from './InnerTable.jsx';


const TeamTable = (props) => {

  const sums = {
    threePtsMade: 0,
    points: 0,
    REB: 0,
    assists: 0,
    steals: 0,
    blocks: 0,
    TO: 0,
    FP: 0,
    FGA: 0,
    FGM: 0,
    FTA: 0,
    FTM: 0
  }



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
          for(var keys in sums) {
            var add =  item[keys];
            sums[keys] += add;
          }

          return (
            <InnerTable info = {item} key = {item._id}/>
          )
        })}
      </tbody>
      <tbody>
        <td>Total</td>
        <td></td>
        <td>{Math.round((sums.FGM) / (sums.FGA)* 1000) / 1000}</td>
        <td>{Math.round((sums.FTM) / (sums.FTA)* 1000) / 1000}</td>
        <td>{Math.round((sums.threePtsMade)* 1000) / 1000}</td>
        <td>{Math.round((sums.points)* 1000) / 1000}</td>
        <td>{Math.round((sums.REB)* 1000) / 1000}</td>
        <td>{Math.round((sums.assists)* 1000) / 1000}</td>
        <td>{Math.round((sums.steals)* 1000) / 1000}</td>
        <td>{Math.round((sums.blocks)* 1000) / 1000}</td>
        <td>{Math.round((sums.TO)* 1000) / 1000}</td>
        <td>{Math.round((sums.FP)* 1000) / 1000}</td>
      </tbody>
  </table>

  )

}


export default TeamTable;