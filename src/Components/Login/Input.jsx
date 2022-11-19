import React from 'react'

function Input(props) {
  return (
    <input type='text' className='inputField' placeholder={props.placeholder} />
  )
}

export default Input