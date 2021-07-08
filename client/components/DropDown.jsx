/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const DropDown = (props) => {

  const handleChange = (value) => {
    props.callback(value);
  }

  return(
    <>
    {/* <label htmlFor="method">Average or Total:</label> */}
      <select name = {props.name} id = {props.id} onChange = {handleChange(event.target.value)}>
        <option value="average" >Average</option>
        <option value="total">Total</option>
      </select>
    </>
 );



}



export default DropDown;
