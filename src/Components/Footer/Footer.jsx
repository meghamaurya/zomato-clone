import React from 'react';
import DropDown from './DropDown';
import './Footer.css'
import img from '../../Images/language_icon.png'
import Heading from './Heading';
import Item from './Item';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import SocialLink from './SocialLink';
import Download from './Download';


function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='' />
                <div className='row'>
                    <DropDown img='https://flagpedia.net/data/flags/normal/in.png' title='India' />
                    <DropDown img={img} title='English' />
                </div>
            </div>
            <div className='bottom'>
                <div className="items">
                    <Heading title='about zomato' />
                    <Item title='Who we are' />
                    <Item title='Blog' />
                    <Item title='work with us' />
                    <Item title='investor relations' />
                    <Item title='report fraud' />
                    <Item title='contact us' />
                </div>
                <div className="items">
                    <Heading title='zomaverse' />
                    <Item title='Zomato' />
                    <Item title='Blinkit' />
                    <Item title='feeding india' />
                    <Item title='hyperpure' />
                    <Item title='zomaland' />
                </div>
                <div className="items">
                    <Heading title='for restaurants' />
                    <Item title='partner with us' />
                    <Item title='apps for you' />
                    <div className="items">
                        <Heading title='for enterprises' />
                        <Item title='zomato for work' />
                    </div>
                </div>
                <div className="items">
                    <Heading title='learn more' />
                    <Item title='Privacy' />
                    <Item title='Security' />
                    <Item title='Terms' />
                    <Item title='Sitemap' />
                </div>
                <div className="items social-items">
                    <Heading title='social links' />
                    <div className='social-links'>
                        <SocialLink icon={FaLinkedinIn} />
                        <SocialLink icon={FaInstagram} />
                        <SocialLink icon={FaTwitter} />
                        <SocialLink icon={FaYoutube} />
                        <SocialLink icon={FaFacebookF} />
                    </div>
                    <div className='download'>
                        <Download img={'https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'} />
                        <Download img={'https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'} />
                    </div>
                </div>
            </div>
            <div className='line'></div>
            <span>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</span>
        </div>
    )
}

export default Footer