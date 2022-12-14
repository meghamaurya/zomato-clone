import React, { useState } from 'react'
import Cards2 from '../Cards-2-home/cards2'
import Explore from '../Explore/Explore'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Details from './Details'

function FoodDetails() {
    const [signup, setSignUp] = useState(false)
    const [login, setLogin] = useState(false)
    return (
        <>
            <Details signup={signup} setSignUp={setSignUp} login={login} setLogin={setLogin} />
            {signup ? <Signup login={login} setLogin={setLogin} signup={signup} setSignUp={setSignUp} /> : null}
            {login ? <Login login={login} setLogin={setLogin} signup={signup} setSignUp={setSignUp} /> : null}
            <Cards2 />
            <Explore />
            <Footer />
        </>
    )
}

export default FoodDetails