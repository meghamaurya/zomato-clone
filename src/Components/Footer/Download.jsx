import React from 'react'

function Download(props) {
  return (
    <a href={props.link} rel='noreferrer' target='_blank'>
      <img src={props.img} alt='' />
    </a>
  )
}

export default Download