import "./styles.css";
import Input from "./Input";
import Icons from "./Icons";
import Location from "../../Image/Location.svg";
import Search from "../../Image/Search.svg";
import DownAngle from "../../Image/DownAngle.svg";

function Hero() {

    return (
        <div className="hero-image">
            <div className="hero-text">
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" className="title" />
                <h1>Discover the best food & drinks in Bhopal</h1>
                <div className="searchBar">
                    <div className="dropdown">
                        <Icons src={Location} />
                        <Input placeholder="Bhopal" className="location" type="text" disabled={true} />
                        <Icons src={DownAngle} />
                    </div>
                    <div className="verticalLine"></div>
                    <div className="searchField">
                        <Icons src={Search} />
                        <Input placeholder="Search for restaurant, cuisine or a dish" className="searchInput" type="search" disabled={false} />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Hero;