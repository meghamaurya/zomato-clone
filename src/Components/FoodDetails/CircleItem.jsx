import React from 'react'

function CircleItem(props) {
  return (
    <div className='CircleItem'>
        <img src={props.src} alt='' />
        <span>{props.title}</span>
    </div>
  )
}

export default CircleItem