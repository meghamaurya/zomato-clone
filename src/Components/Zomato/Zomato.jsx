import React, { useEffect, useState } from 'react';
import Download from '../Footer/Download';
import LinkSend from './LinkSend';
import './Zomato.css';
import { TfiAngleDown } from 'react-icons/tfi';

const countryCode = [91, 60, 63, 96, 56, 1, 64, 27, 353, 44, 971, 420, 65, 351, 974, 61, 421, 55, 48]

function Zomato() {
  const [sendType, setSendType] = useState('Email');
  const [selectCountry, setSelectCountry] = useState(91);
  const [openCode, setOpenCode] = useState(false);

  const [value, setValue] = useState('');

  const handleCode = (item) => {
    setSelectCountry(item);
    setOpenCode(false)
  }

  useEffect(() => {
    setValue('')
  }, [sendType]);
  
  return (
    <div className='zomato'>
      <img src='https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png' alt='' />
      <div className='App'>
        <span>Get the Zomato app</span>
        <span>We will send you a link, open it on your phone to download the app.</span>
        <div className='SendLink'>
          <LinkSend sendType={sendType} setSendType={setSendType} name='Email' />
          <LinkSend sendType={sendType} setSendType={setSendType} name='Phone' />
        </div>
        <div className='send'>
          <input onChange={(e) => setValue(e.target.value)} value={value} className={sendType === 'Phone' ? 'Phone' : ''} type='text' placeholder={sendType === 'Email' ? 'Email' : 'Type Here'} />
          <button className='btn'></button>
          {sendType === 'Phone' ? <span onClick={() => setOpenCode(!openCode)}>+{selectCountry} <TfiAngleDown className='icon' /></span> : null}
          {openCode && sendType === 'Phone' ? <div className='phoneCode'>
            {countryCode.map((item, index) => {
              return (
                <span onClick={() => handleCode(item)} key={`phoneCode-${index}`}>+{item}</span>
              )
            })}
          </div>
            :
            null}
        </div>
        <span>Download app from</span>
        <div className='download'>
          <Download link='https://appstore.com' img={'https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'} />
          <Download link='https://playstore.com' img={'https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'} />
        </div>
      </div>
    </div>
  )
}

export default Zomato;