import React, { useState, useEffect } from 'react';



const Form = (props) => {


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
      <input type = 'number' value = {amount} onChange = {handleChange}></input>
      {/* <input type = 'submit' value = 'submit'></input> */}
      <label>{props.name}</label>
    </form>
  )





}


export default Form;