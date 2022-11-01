import './style2.css';
import Cards from './cards2.json';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { GoTriangleRight } from 'react-icons/go';
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Cards2 = () => {

    return (
        <div className="card2-container">
            <div className="heading">
                <h3>Collections</h3>
                <div className='detail'>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends</p>
                    <span className='link-para'>All Collections in Bhopal <GoTriangleRight /></span>
                </div>
            </div>
            <div className='cards'>
                {Cards.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <img src={item.image} alt={item.title} className="row2-card" />
                            <div className='img-text'>
                                <span className='title'><ResponsiveEllipsis text={item.title} maxLine='1' ellipsis="..." trimRight basedOn='letters' /></span>
                                <span className='place'>{item.place} <GoTriangleRight /></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards2;