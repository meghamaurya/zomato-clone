import React, { useState } from 'react';
import Logo from '../Logo';
import './detail.css';
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Delivery from './Delivery';
import Heading from './Heading';
import CircleItem from './CircleItem';


function Details() {
    const [clicked, setClicked] = useState('Delivery')
    return (
        <div className='detailsPage'>
            <div className='Nav'>
                <Logo />
                <button>Use App</button>
                <div className='userIcon'>
                    <FaUserAlt />
                </div>
                <Link to='/login' className='rightLink'>Log in</Link>
                <Link to='/login' className='rightLink'>Sign up</Link> 
            </div>
            <div className='Delivery'>
                <Delivery clicked={clicked} setClicked={setClicked} src={clicked === 'Delivery' ? 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png' : 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'} title='Delivery' />
                <Delivery clicked={clicked} setClicked={setClicked} src={clicked === 'Dining Out' ? 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png' : 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png'} title='Dining Out' />
                <Delivery clicked={clicked} setClicked={setClicked} src={clicked === 'Nightlife' ? 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png' : 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'} title='Nightlife' />
            </div>
            <div className='Inspiration'>
                <Heading title='Inspiration for your first order' />
                <div className='CircleCard'>
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' title='Pizza' />
                </div>
            </div>
        </div>
    )
}

export default Details