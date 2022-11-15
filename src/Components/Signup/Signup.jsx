import React from 'react';
import Button from '../Navbar/Button';
import './Signup.css';
import { IoCloseSharp } from 'react-icons/io5'
import Input from './Input';

function Signup(props) {
  const handleClick = () => {
    props.setSignUp(!props.signup)
  }
  return (
    <div className='Signup'>
      <div className='card'>
        <div className='top'>
          <span>Sign up</span>
          <Button click={handleClick} title={<IoCloseSharp />} />
        </div>
        <Input placeholder='Full Name' />
        <Input placeholder='Email' />
        <label className='checkbox'>
          <input type='checkbox' />
          
          <span>I agree to Zomato's<span className='red'>Terms of Service, Privacy Policy</span> and <span className='red'>Content Policies</span></span>
        </label>
      </div>
    </div>
  )
}

export default Signup;