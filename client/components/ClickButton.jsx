/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const ClickButton = (props) => {

  const handleClick = ()=> {
    props.callback(event.target.value);
  }

  return(

      <button type = 'button' value = {props.statIndex} onClick = {handleClick}>{props.statSort}</button>

  )


}


export default ClickButton;