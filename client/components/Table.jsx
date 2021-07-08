/* eslint-disable react/prop-types */
import React from 'react';


const Table = (props) => {

  const {field_goals_att, field_goals_made, free_throws_att, free_throws_made, three_points_made, points, rebounds, assists, steals, blocks, turnovers } = props.info[props.method];

  const scoreSetting = {
    '3PM': three_points_made * props.threePtMulti,
    points: points * props.pointMulti,
    rebounds: rebounds * props.rebMulti,
    assists: assists * props.aMulti,
    steals: steals * props.stealMulti,
    blocks: blocks * props.blockMulti,
    turnovers: turnovers * props.TOMulti
  }

  let fantasyPts = 0;
  for (var keys in scoreSetting) {
    fantasyPts += scoreSetting[keys];
  }
  fantasyPts = Math.round(fantasyPts);

  const {full_name, primary_position} = props.info.player;
  return(
    <tr>
      <td>{props.info.rank}</td>
      <td>{full_name}</td>
      <td>{primary_position}</td>
      <td>{props.info.teams[0].name}</td>
      <td>{Math.round((field_goals_made/field_goals_att)*1000) / 1000}</td>
      <td>{Math.round((free_throws_made/free_throws_att)*1000) / 1000}</td>
      <td>{three_points_made}</td>
      <td>{points}</td>
      <td>{rebounds}</td>
      <td>{assists}</td>
      <td>{steals}</td>
      <td>{blocks}</td>
      <td>{turnovers}</td>
      <td>{fantasyPts}</td>
    </tr>
  )


}


export default Table;