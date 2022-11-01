import Hero from "../Hero/Hero";
import Cards2 from "../Cards-2-home/cards2";
import Cards1 from "../Cards-1-home/cards";
import Popular from "../Popular/Popular";
import Zomato from "../Zomato/Zomato";
import Footer from "../Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Cards1 />
            <Cards2 />
            <Popular />
            <Zomato />
            <Footer />
        </div>
    )
}
export default HomePage;