/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const DropDown = (props) => {

  const handleChange = () => {
    props.callback(event.target.value);
  }

  return(
    <>
    {/* <label htmlFor="method">Average or Total:</label> */}
      <select name = {props.name} id = {props.id} onChange = {handleChange}>
        <option value="average" >Average</option>
        <option value="total">Total</option>
      </select>
    </>
 );



}



export default DropDown;
