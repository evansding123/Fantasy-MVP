/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import DropDown from './DropDown.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';

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

  const array = [];
  const nameToIndex = {
    points: 1,
    assists: 2,
    turnovers: 3,
    steals: 4,
    blocks: 5,
    '3PM': 9,
    rebounds: 17
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
    }
  }




  return(
    <div>
      <DropDown callback = {handleChange}/>
      <Button statIndex = {nameToIndex.points} statSort = {'points'} callback = {handleClick}/>
      <Button statIndex = {nameToIndex['3PM']} statSort = {'3PM'} callback = {handleClick}/>
      <Button statIndex = {nameToIndex.rebounds} statSort = {'rebounds'} callback = {handleClick}/>
      <Button statIndex = {nameToIndex.assists} statSort = {'assists'} callback = {handleClick}/>
      <Button statIndex = {nameToIndex.steals} statSort = {'steals'} callback = {handleClick}/>
      <Button statIndex = {nameToIndex.blocks} statSort = {'blocks'} callback = {handleClick}/>
      <Button statIndex = {nameToIndex.turnovers} statSort = {'turnovers'} callback = {handleClick}/>
      <Form score = {1} name = 'points' callback = {changeScore}/>
      <Form score = {1} name = '3PM' callback = {changeScore}/>
      <Form score = {1} name = 'rebounds' callback = {changeScore}/>
      <Form score = {1} name = 'assists' callback = {changeScore}/>
      <Form score = {1} name = 'steals' callback = {changeScore}/>
      <Form score = {1} name = 'blocks' callback = {changeScore}/>

    <table className = 'players'>
    <thead>
      <tr className = 'row'>
        <th>Rank</th>
        <th>Player</th>
        <th>Position</th>
        <th>Team</th>
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
      {props.data.categories[nameToIndex[statSort]].ranks.map((item, index) => {
        return (
          <Table info = {item} key = {index} method = {method} pointMulti = {pointMulti}
          threePtMulti = {threePtMulti}
          rebMulti = {rebMulti}
          aMulti = {aMulti}
          stealMulti = {stealMulti}
          blockMulti = {blockMulti}
          TOMulti = {TOMulti}
          />
        )
      })}
    </tbody>
    </table>
    </div>
  )


}

export default Overview;
