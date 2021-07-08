/* eslint-disable react/prop-types */
import React from 'react';


const InnerTable = (props) => {

  const {FGA, FGM, FP, FTA, FTM, REB, TO, assists, blocks, id, name, points, position, threePtsMade, steals } = props.info;

  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{Math.round((FGM/FGA)*1000) / 1000}</td>
      <td>{Math.round((FTM/FTA)*1000) / 1000}</td>
      <td>{threePtsMade}</td>
      <td>{points}</td>
      <td>{REB}</td>
      <td>{assists}</td>
      <td>{steals}</td>
      <td>{blocks}</td>
      <td>{TO}</td>
      <td>{FP}</td>
    </tr>
  );
}

export default InnerTable;