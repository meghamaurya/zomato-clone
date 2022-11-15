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


const HomePage = () => {
    const [signup, setSignUp] = useState(false)

    return (
        <div className='homepage'>
            <Navbar signup={signup} setSignUp={setSignUp} />
            {signup ? <Signup signup={signup} setSignUp={setSignUp} /> : null}
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