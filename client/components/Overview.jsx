/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PlayerTable from './PlayerTable.jsx';
import DropDown from './DropDown.jsx';
import ClickButton from './ClickButton.jsx';
import Form from './Form.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const Overview = (props) => {

  const [method, setMethod] = useState('average');
  const [statSort, setStat] = useState('points');
  const [pointMulti, setPoint] = useState(1);
  const [threePtMulti, setThree] = useState(1);
  const [rebMulti, setReb] = useState(1);
  const [aMulti, setA] = useState(1);
  const [stealMulti, setSteal] = useState(1);
  const [blockMulti, setBlock] = useState(1);
  const [TOMulti, setTO] = useState(-1);
  const [FGAMulti, setFGA] = useState(-0.5);
  const [FTAMulti, setFTA] = useState(-0.5);

  const array = [];
  const nameToIndex = {
    FGA: 8,
    FTA: 14,
    '3PM': 9,
    points: 1,
    rebounds: 17,
    assists: 2,
    steals: 4,
    blocks: 5,
    turnovers: 3
  }

  for(var keys in nameToIndex) {
    array.push(keys);
  }

  const handleChange = (value) => {
    setMethod(value);
  }

  const handleClick = (value) => {
    setStat(value);

  }

  const changeScore = (value, name) => {
    if(name === 'points') {
      setPoint(value);
    } else if(name === '3PM'){
      setThree(value);
    } else if(name === 'rebounds') {
      setReb(value);
    } else if(name === 'assists') {
      setA(value);
    } else if(name === 'steals') {
      setSteal(value);
    } else if(name === 'blocks') {
      setBlock(value);
    } else if(name === 'turnovers') {
      setTO(value);
    } else if(name === 'FGA') {
      setFGA(value);
    } else if(name === 'FTA') {
      setFTA(value);
    }
  }


  const handleAdd = (obj) => {
    props.callback(obj);
  }

  return(
    <div>
       <DropDown callback = {handleChange}/>
      <ClickButton statIndex = {nameToIndex.points} statSort = {'points'} callback = {handleClick}/>
      <ClickButton statIndex = {nameToIndex['3PM']} statSort = {'3PM'} callback = {handleClick}/>
      <ClickButton statIndex = {nameToIndex.rebounds} statSort = {'rebounds'} callback = {handleClick}/>
      <ClickButton statIndex = {nameToIndex.assists} statSort = {'assists'} callback = {handleClick}/>
      <ClickButton statIndex = {nameToIndex.steals} statSort = {'steals'} callback = {handleClick}/>
      <ClickButton statIndex = {nameToIndex.blocks} statSort = {'blocks'} callback = {handleClick}/>
      <ClickButton statIndex = {nameToIndex.turnovers} statSort = {'turnovers'} callback = {handleClick}/>
      <h4>Modify Rating</h4>
      <div className = 'forms'>
      {array.map((item, index) => {
        return(
          <Form score = {1} name = {item} callback = {changeScore} key = {index}/>
        )
      })}
      </div>

    <TableContainer component = {Paper}>
      <Table className = 'players' >
      <TableHead>
        <TableRow className = 'TableRow'>
          <TableCell></TableCell>
          <TableCell>Rank</TableCell>
          <TableCell>Player</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Team</TableCell>
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
        {props.data.categories[nameToIndex[statSort]].ranks.map((item, index) => {
          return (
            <PlayerTable info = {item} key = {index} method = {method}
            FGAMulti = {FGAMulti}
            FTAMulti = {FTAMulti}
            pointMulti = {pointMulti}
            threePtMulti = {threePtMulti}
            rebMulti = {rebMulti}
            aMulti = {aMulti}
            stealMulti = {stealMulti}
            blockMulti = {blockMulti}
            TOMulti = {TOMulti}
            callback = {handleAdd}
            />
          )
        })}
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  )


}

export default Overview;
