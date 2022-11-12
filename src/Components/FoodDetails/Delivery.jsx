import React from 'react'

function Delivery(props) {
  return (
    <div onClick={() => props.setClicked(props.title)} className='DeliveryItem'>
        <img src={props.src} alt='' />
        <span className={props.clicked === props.title ? 'color1' : 'color2'}>{props.title}</span>
        {props.clicked === props.title ? <div className='line'></div> : null}
    </div>
  )
}

export default Delivery