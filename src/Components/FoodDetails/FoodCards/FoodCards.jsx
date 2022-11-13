import React from 'react';
import { Link } from 'react-router-dom';
import './FoodCard.css'
import { FoodData } from './FoodData';
import { FaStar } from 'react-icons/fa'


function FoodCards() {
    return (
        <div className='FoodCards'>
            <div className='FoodContainer'>
                {FoodData.map((item, index) => {
                    return (
                        <Link to='/agra' className='Cards' key={`foodCard-${index}`}>
                            <div className='image'>
                                <img src={item.img} alt='' />
                                {item.proDiscount && <span className='pro'>{item.proDiscount}</span>}
                                {item.discount && <span className='discount'>{item.discount}</span>}
                            </div>
                            <div className='data'>
                                <div className='left'>
                                    <span className='title'>{item.title}</span>
                                    <span>{item.address}</span>
                                </div>
                                <div className='right'>
                                    <span>{item.rating} <FaStar className='icon' /></span>
                                    <span className='price'>₹{item.price} for one</span>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='order'>
                                <img src='https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png' alt='' />
                                <span>{item.recentOrder}+ orders placed from here recently</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default FoodCards
