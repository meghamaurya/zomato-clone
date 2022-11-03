import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from 'react-icons/md';
// import List from './List';
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded);
        setToggleIcon(true);
    }
    return (
        <nav className='navbar'>
            <button className='hamburger'
                onClick={handleClick} >
                {isNavExpanded ? <RiCloseLine className='hamburger-cross' /> : <IoMdMenu className='hamburger-icon' />}
            </button>
            <div className={isNavExpanded ? 'navigation-menu expanded' : "navigation-menu"}>
                {!isNavExpanded ? <div className='add'>
                    <MdOutlineSendToMobile /> <span>Get the App</span>
                </div> : ''}
                <div className='menu-link'>
                    {/* <List>Investor Relations</List>
                    <List>Add restaurant</List>
                    <List>Log in</List>
                    <List>Sign up</List> */}
                    <ul className='ul'>
                        <li className='li'>
                            <Link to="/" className='link'>Investor Relations</Link>
                        </li>
                    </ul>
                    <ul className='ul'>
                        <li className='li'>
                            <Link to="/" className='link'>Add restaurant</Link>
                        </li>
                    </ul>
                    <ul className='ul'>
                        <li className='li'>
                            <Link to="/" className='link'>Log in</Link>
                        </li>
                    </ul>
                    <ul className='ul'>
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
