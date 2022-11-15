import React from 'react';
import Button from '../Navbar/Button';
import './Login.css';
import { IoCloseSharp } from 'react-icons/io5'
import Input from './Input';
import ButtonSign from './ButtonSign';

function Login(props) {
  const handleClick = () => {
    props.setLogin(!props.login);
  }
  return (
    <div className='Signup'>
      <div className='card'>
        <div className='top'>
          <span>Login</span>
          <Button click={handleClick} title={<IoCloseSharp />} />
        </div>
        <Input placeholder='Full Name' />
        <Input placeholder='Email' />
        <label className='checkbox'>
          <input type='checkbox' />

          <span>I agree to Zomato's <span className='red'>Terms of Service, Privacy Policy</span> and <span className='red'>Content Policies</span></span>
        </label>
        <ButtonSign className='signButton' title='Create account' />
        <div className='option'>
          <div className='line'></div>
          <span>or</span>
          <div className='line'></div>
        </div>
        <div className='AlreadyAccount'>
          <span>Already have an account ?</span>
          <span>Log in</span>
        </div>
      </div>
    </div>
  )
}

export default Login;