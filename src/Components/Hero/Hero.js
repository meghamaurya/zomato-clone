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
                <div className="title"></div>
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
                        <Input placeholder="Search for restaurant" className="searchInput" type="search" disabled={false} />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Hero;