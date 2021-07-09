/* eslint-disable react/prop-types */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const PlayerTable = (props) => {

  const add = () => {
    props.callback({
      name: full_name,
      position: primary_position,
      team: props.info.teams[0].name,
      points: points,
      FGM: field_goals_made,
      FGA: field_goals_att,
      threePtsMade: three_points_made,
      FTM: free_throws_made,
      FTA: free_throws_att,
      REB: rebounds,
      assists: assists,
      TO: turnovers,
      steals: steals,
      blocks: blocks,
      id: id,
      FP: fantasyPts
    });
  }

  const {field_goals_att, field_goals_made, free_throws_att, free_throws_made, three_points_made, points, rebounds, assists, steals, blocks, turnovers } = props.info[props.method];

  const scoreSetting = {
    FGA: field_goals_att * props.FGAMulti,
    FTA: free_throws_att * props.FTAMulti,
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

  const {full_name, primary_position, id} = props.info.player;
  return(
    <TableRow>
      <TableCell>
      <Button color="primary"  size ='small' variant ='outlined' onClick = {add}>Add</Button>
      </TableCell>
      <TableCell>{props.info.rank}</TableCell>
      <TableCell>{full_name}</TableCell>
      <TableCell>{primary_position}</TableCell>
      <TableCell>{props.info.teams[0].name}</TableCell>
      <TableCell>{Math.round((field_goals_made/field_goals_att)*1000) / 1000}</TableCell>
      <TableCell>{Math.round((free_throws_made/free_throws_att)*1000) / 1000}</TableCell>
      <TableCell>{three_points_made}</TableCell>
      <TableCell>{points}</TableCell>
      <TableCell>{rebounds}</TableCell>
      <TableCell>{assists}</TableCell>
      <TableCell>{steals}</TableCell>
      <TableCell>{blocks}</TableCell>
      <TableCell>{turnovers}</TableCell>
      <TableCell>{fantasyPts}</TableCell>
    </TableRow>
  )


}


export default PlayerTable;