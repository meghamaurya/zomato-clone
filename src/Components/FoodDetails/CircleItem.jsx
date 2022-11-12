import React from 'react'

function CircleItem(props) {
  return (
    <div className='CircleItem'>
      <div className='Circle'>
        <img src={props.src} alt='' />
      </div>
      <span>{props.title}</span>
    </div>
  )
}

export default CircleItem