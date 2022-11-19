import Hero from "../Hero/Hero";
import Cards2 from "../Cards-2-home/cards2";
import Cards1 from "../Cards-1-home/cards";
import Popular from "../Popular/Popular";
import Zomato from "../Zomato/Zomato";
import Footer from "../Footer/Footer";
import Explore from "../Explore/Explore";
import Navbar from '../Navbar/Navbar'
import Signup from '../Signup/Signup';
import './Homepage.css'
import { useState } from "react";
import Login from "../Login/Login";


const HomePage = () => {
    const [signup, setSignUp] = useState(false)
    const [login, setLogin] = useState(false)
    return (
        <div className='homepage'>
            <Navbar signup={signup} setSignUp={setSignUp} login={login} setLogin={setLogin} />
            {signup ? <Signup login={login} setLogin={setLogin} signup={signup} setSignUp={setSignUp} /> : null}
            {login ? <Login login={login} setLogin={setLogin} signup={signup} setSignUp={setSignUp} /> : null}
            <Hero />
            <Cards1 />
            <Cards2 />
            <Popular />
            <Zomato />
            <Explore />
            <Footer />
        </div>
    )
}
export default HomePage;