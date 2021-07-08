/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import DropDown from './DropDown.jsx';

const Overview = (props) => {

  const [method, setMethod] = useState('average');

  useEffect(() => {
    setMethod('average');
  }, [method]);


  const handleChange = (value) => {
    setMethod(value);
  }


  return(
    <div>
      <DropDown callback = {handleChange}/>
    <table className = 'players'>
    <thead>
      <tr>
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
      </tr>
    </thead>
    <tbody>
      {props.data.categories[1].ranks.map((item, index) => {
        return (
          <Table info = {item} key = {index} method = {method}/>
        )
      })}
    </tbody>
    </table>
    </div>
  )


}


export default Overview;
