import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineSendToMobile } from 'react-icons/md';
function Navbar() {
    return (
        <nav className='navbar'>
            <button className='hamburger' ><HiBars3 /></button>
            <div className='content'>
                <div className='add'>
                    <MdOutlineSendToMobile /> <span>Get the App</span>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li className='li'>
                            <Link to="/" className='link'>Investor Relations</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className='li'>
                            <Link to="/" className='link'>Add restaurant</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className='li'>
                            <Link to="/" className='link'>Log in</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className='li'>
                            <Link to="/" className='link'>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
