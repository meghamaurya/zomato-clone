import React from 'react';
import {TfiAngleDown} from 'react-icons/tfi'

function DropDown(props) {
  return (
    <div className='dropDown'>
        <img src={props.img} alt='' />
        <span>{props.title}</span>
        <TfiAngleDown className='icon' />
    </div>
  )
}

export default DropDown;