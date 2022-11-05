import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to='/' className='Link'>
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='' />
        </Link>
    )
}

export default Logo