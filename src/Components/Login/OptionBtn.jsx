import React from 'react'

function OptionBtn(props) {
  return (
    <div className='OptionBtn'>
        {props.icon}
        <span>{props.title}</span>
    </div>
  )
}

export default OptionBtn