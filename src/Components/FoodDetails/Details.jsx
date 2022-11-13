import React, { useState } from 'react';
import Logo from '../Logo';
import './detail.css';
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Delivery from './Delivery';
import Heading from './Heading';
import CircleItem from './CircleItem';
import { data } from './TopBrands'
import FoodCards from './FoodCards/FoodCards';


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
                <Link to='/signup' className='rightLink'>Sign up</Link>
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
                    <CircleItem src='https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png' title='Rolls' />
                    <CircleItem src='https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' title='Burger' />
                    <CircleItem src='https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' title='Chicken' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png' title='Momos' />
                    <CircleItem src='https://b.zmtcdn.com/data/o2_assets/9cf8166717d81ec3212d0707a06749f91634401116.png' title='Pasta' />
                    <CircleItem src='https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png' title='Chaat' />
                </div>
            </div>
            <div className='Inspiration brands'>
                <Heading title='Top brands for you' />
                <div className='CircleCard'>
                    {data.map((item, index) => {
                        return (
                            <div key={`brand-${index}`} className='CircleItem'>
                                <div className='Circle'>
                                    <img src={item.img} alt='' />
                                </div>
                                <span>{item.title}</span>
                                <span className='time'>{item.time}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <FoodCards />
        </div>
    )
}

export default Details