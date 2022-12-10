import React, { useEffect, useState } from 'react';
import Button from '../Navbar/Button';
import './Login.css';
import { IoCloseSharp } from 'react-icons/io5';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import ButtonSign from './ButtonSign';
import OptionBtn from './OptionBtn';
import {HiMail} from 'react-icons/hi';
import {FcGoogle} from 'react-icons/fc'

function Login(props) {
  const [country, setCountry] = useState([]);
  const [open, setOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('+91')

  const handleClick = () => {
    props.setLogin(!props.login);
  }

  const handleSignUp = () => {
    props.setLogin(!props.login);
    props.setSignUp(!props.signup)
  }

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json')
      .then(res => res.json())
      .then((res) => {
        setCountry(res)
      })
      .catch(() => console.log('Err'))
  })

  const handleCountry = title => {
    setCountryCode(title);
    setOpen(false)
  }

  return (
    <div className='Login'>
      <div className='LoginCard'>
        <div className='top'>
          <span>Login</span>
          <Button click={handleClick} title={<IoCloseSharp />} />
        </div>

        {country
          ?
          <div className='phoneInput'>
            <div onClick={() => setOpen(!open)} className='code'>
              {countryCode}
              {open ? <FaAngleUp className='icon' /> : <FaAngleDown className='icon' />}
            </div>
            {open ? <div className='All-Code'>
              {country.map((item, index) => {
                return (
                  <span onClick={() => handleCountry(item.dial_code)} className='countryData' key={`country-${index}`}>
                    <span>{item.name}</span>
                    <span>{item.dial_code}</span>
                  </span>
                )
              })}
            </div> : null}
            <div className='lineCode'></div>
            <input type='tel' placeholder='Phone' />
          </div>
          : null
        }

        <ButtonSign className='otp' title='Send One Time Password' />

        <div className='option'>
          <div className='line'></div>
          <span>or</span>
          <div className='line'></div>
        </div>
        <OptionBtn icon={<HiMail className='btnicon' />} title='Continue with Email' />
        <OptionBtn icon={<FcGoogle className='btnicon' />} title='Continue with Google' />
        <div onClick={handleSignUp} className='AlreadyAccount'>
          <span>New to Zomato ?</span>
          <span>Create account</span>
        </div>
      </div>
    </div>
  )
}

export default Login;