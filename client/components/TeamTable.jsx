/* eslint-disable react/prop-types */
import React from 'react';
import InnerTable from './InnerTable.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


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

  const handleClick = () => {
    props.callback(props.id);
  }

  return(
  <>
  <TableContainer component = {Paper}>
    <Table className = 'teams'>
      <TableHead>
          <TableRow className = 'TableRow'>
            <TableCell>Player</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>FG</TableCell>
            <TableCell>FT</TableCell>
            <TableCell>3PM</TableCell>
            <TableCell>PTS</TableCell>
            <TableCell>REB</TableCell>
            <TableCell>AST</TableCell>
            <TableCell>STL</TableCell>
            <TableCell>BLK</TableCell>
            <TableCell>TO</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className = 'TableBody'>
          {props.info.map((item) => {
            for(var keys in sums) {
              var add =  item[keys];
              sums[keys] += add;
            }
            return (
              <InnerTable info = {item} key = {item._id}/>
            )
          })}
        </TableBody>
        <TableBody className = 'totalRow'>
          <TableCell>Total</TableCell>
          <TableCell><Button onClick = {handleClick}variant="outlined" color="secondary" size='small' type = 'button'>Delete</Button></TableCell>
          <TableCell>{Math.round((sums.FGM) / (sums.FGA)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.FTM) / (sums.FTA)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.threePtsMade)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.points)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.REB)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.assists)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.steals)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.blocks)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.TO)* 1000) / 1000}</TableCell>
          <TableCell>{Math.round((sums.FP)* 1000) / 1000}</TableCell>
        </TableBody>
    </Table>
  </TableContainer>
  <br></br>
  </>


  )

}


export default TeamTable;