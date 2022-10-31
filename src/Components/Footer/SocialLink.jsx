import React from 'react'

function SocialLink(props) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className='social'>
        <props.icon className='icon' />
    </a>
  )
}

export default SocialLink