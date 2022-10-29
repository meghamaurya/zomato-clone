import React, { useState } from 'react'
import './Popular.css';
import { TfiAngleDown, TfiAngleRight } from 'react-icons/tfi'


const places = [
    {
        name: 'Tajganj',
        number: 355
    },
    {
        name: 'Civil Lines',
        number: 204
    },
    {
        name: 'Agra Cantt',
        number: 97
    },
    {
        name: 'Sikandra',
        number: 172
    },
    {
        name: 'Mantola',
        number: 52
    },
    {
        name: 'Khandari',
        number: 74
    },
    {
        name: 'Kamla Nagar',
        number: 96
    },
    {
        name: 'Rakabganj',
        number: 66
    },
    {
        name: 'Dayal Bagh',
        number: 66
    },
    {
        name: 'Shahganj',
        number: 88
    },
    {
        name: 'Lohamandi',
        number: 53
    },
    {
        name: 'Kuberpur',
        number: 21
    },
    {
        name: 'Arjun Nagar',
        number: 24
    },
    {
        name: 'Gopal Pura',
        number: 31
    },
]

function Popular() {
    const [showMore, setShowMore] = useState(false);

    const handleSeeMore = () => {
        setShowMore(true)
    }

    return (
        <div className='popular'>
            <span>Popular localities in and around <span className='city'>Agra</span></span>
            <div className='places'>
                {places.map((element, index) => {
                    return showMore ? <div key={`popular-${index}`} className='item'>
                                <div className='left'>
                                    <span>{element.name}</span>
                                    <span>{element.number} places</span>
                                </div>
                                <TfiAngleRight className='icon' />
                            </div> : index < 8 ?
                                <div key={`popular-${index}`} className='item'>
                                    <div className='left'>
                                        <span>{element.name}</span>
                                        <span>{element.number} places</span>
                                    </div>
                                    <TfiAngleRight className='icon' />
                                </div>
                                : null
                })}
                {!showMore ? <div onClick={handleSeeMore} className='item more'>
                    <span>see more</span>
                    <TfiAngleDown className='icon' />
                </div> : null}
            </div>
        </div>
    )
}

export default Popular