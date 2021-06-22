import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  return <>
    <form className='form' onSubmit=''>
      <div className="form-control">
        <label htmlFor="firstName">Name :</label>
        <input id="firstName" type="text" name='firstName' />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email :</label>
        <input id="email" type="text" name='email' />
      </div>
      <button type='submit'>add person</button>

    </form>
  </>
};

export default ControlledInputs;
