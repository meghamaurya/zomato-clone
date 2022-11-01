import React from 'react';
import './Explore.css';
import { data } from './Data'
import Card from './Card';


function Explore() {
    
    return (
        <div className='explore'>
            <span>Explore options near me</span>
            {data.map((item, index) => {
                return (
                    <div key={`explore-${index}`} className=''>
                        <Card title={item.title} tag={item.tag} />
                    </div>
                )
            })}
        </div>
    )
}

export default Explore