import React from 'react'
import Cards2 from '../Cards-2-home/cards2'
import Explore from '../Explore/Explore'
import Footer from '../Footer/Footer'
import Details from './Details'

function FoodDetails() {
    return (
        <div>
            <Details />
            <Cards2 />
            <Explore />
            <Footer />
        </div>
    )
}

export default FoodDetails