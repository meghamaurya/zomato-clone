import React from 'react'

function Button(props) {
  
  return (
    <button onClick={props.click} className='link' >{props.title}</button>
  )
}

export default Button