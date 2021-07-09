import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const Form = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const [amount, setAmount] = useState('');

// useEffect(() => {
//   setAmount(props.score);
// })

const handleSubmit = () => {
  event.preventDefault();
  console.log(event.target.value);
}

const handleChange = () => {
  //event.preventDefault();
  setAmount(event.target.value);
  props.callback(event.target.value, props.name);
}

  return (
    <form className = 'box'>
      {/* <label>{props.name}</label> */}
      <TextField className = 'input' label = {props.name} type = 'number' value = {amount} onChange = {handleChange}></TextField>
      {/* <input type = 'submit' value = 'submit'></input> */}

    </form>
  )





}


export default Form;