import React, { useState } from 'react';
import { TfiAngleDown } from 'react-icons/tfi';
import { Link } from 'react-router-dom'

function Card(props) {
    const [show, setShow] = useState(false)

    return (
        <div className='explore-card'>
            <div onClick={() => setShow(!show)} className='title'>
                <span>{props.title}</span>
                <TfiAngleDown className={show ? 'rotateShow' : 'rotateHide'} />
            </div>
            <div className={show ? props.title === 'Cities We Deliver To' ? 'countries' : 'detail' : 'hide'}>
                {props.tag.split(',').map((item, index) => {
                    return <span className='card-item' key={`tag-${index}`}>
                        {index !== 0 && props.title !== 'Cities We Deliver To' ? <span>&#x2022;</span> : null}
                        <Link className='link' to='/agra'>{item}</Link>
                    </span>
                })}
                {props.title === 'Cities We Deliver To' ?
                    <Link className='link bold' to='/country'>See More</Link>
                    : null}
            </div>
        </div>
    )
}

export default Card