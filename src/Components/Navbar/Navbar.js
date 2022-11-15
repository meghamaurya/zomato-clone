import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from 'react-icons/md';
import List from './List';
import Signup from '../Signup/Signup';
import Button from './Button';


function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [signup, setSignUp] = useState(false)

    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded);
    }

    const handleSignup = () => {
        setSignUp(true)
    }

    return (
        <nav className='navbar'>
            <div className='smallScreen'>
                {!isNavExpanded ?
                    <IoMdMenu onClick={handleClick} className='hamburger-icon' />
                    :
                    null}
                {isNavExpanded ?
                    <div className='smallItem'>
                        <RiCloseLine onClick={handleClick} className='hamburger-cross' />
                        <List>Investor Relations</List>
                        <List>Add restaurant</List>
                        <List>Log in</List>
                        <List>Sign up</List>
                    </div> : null}

            </div>


            <div className='largeScreen'>
                <Link to='/' className='add'>
                    <MdOutlineSendToMobile /> <span>Get the App</span>
                </Link>
                <div className='item'>
                    <List>Investor Relations</List>
                    <List>Add restaurant</List>
                    <List>Log in</List>
                    <Button click={handleSignup} title='Sign up' />
                </div>
            </div> :

            {/* <div className='hamburger-heading'>
                <button className='hamburger'
                    onClick={handleClick} >
                    {isNavExpanded ?
                        <RiCloseLine className='hamburger-cross' />
                        : <IoMdMenu className='hamburger-icon' />
                    }
                </button>
                {isNavExpanded ? <div>
                    <span className='title'>zomato</span>
                </div> : null}
            </div>
            <div className={isNavExpanded ? 'navigation-menu expanded' : "navigation-menu"}>
                {!isNavExpanded ? <div className='add'>
                    <MdOutlineSendToMobile /> <span>Get the App</span>
                </div> : ''}
                <div className='menu-link' >
                    <List>Investor Relations</List>
                    <List>Add restaurant</List>
                    <List>Log in</List>
                    <List>Sign up</List>
                </div>
            </div> */}

            {signup ? <Signup /> : null}
        </nav>
    )
}

export default Navbar
