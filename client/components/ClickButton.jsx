/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';


const ClickButton = (props) => {

  const handleClick = (event)=> {
    props.callback(event.currentTarget.value);
  }

  return(
    <Button color = 'primary' type = 'button' value = {props.statSort} onClick = {handleClick}>{props.statSort}</Button>
  );


}


export default ClickButton;