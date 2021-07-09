/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(-2, 1, 1, 1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const DropDown = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target)
    props.callback(event.target.value);
  }

  return(

    <FormControl className={classes.formControl}>
      <InputLabel>Average</InputLabel>
      <Select value = {props.name} defaultValue = 'average' id = {props.id} onChange = {handleChange}>
        <MenuItem value="average" >Average</MenuItem>
        <MenuItem value="total">Total</MenuItem>
      </Select>
      </FormControl>

 );



}



export default DropDown;
