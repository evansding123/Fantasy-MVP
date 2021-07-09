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




const InnerTable = (props) => {

  const {FGA, FGM, FP, FTA, FTM, REB, TO, assists, blocks, id, name, points, position, threePtsMade, steals } = props.info;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{position}</TableCell>
      <TableCell>{Math.round((FGM/FGA)*1000) / 1000}</TableCell>
      <TableCell>{Math.round((FTM/FTA)*1000) / 1000}</TableCell>
      <TableCell>{threePtsMade}</TableCell>
      <TableCell>{points}</TableCell>
      <TableCell>{REB}</TableCell>
      <TableCell>{assists}</TableCell>
      <TableCell>{steals}</TableCell>
      <TableCell>{blocks}</TableCell>
      <TableCell>{TO}</TableCell>
      <TableCell>{FP}</TableCell>
    </TableRow>
  );
}

export default InnerTable;