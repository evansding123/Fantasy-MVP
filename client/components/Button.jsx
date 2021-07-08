/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Button = (props) => {

  const handleClick = ()=> {
    props.callback(event.target.value);
  }

  return(
    <button type = 'button' value = {props.statSort} onClick = {handleClick}>{props.statSort}</button>
  )


}


export default Button;