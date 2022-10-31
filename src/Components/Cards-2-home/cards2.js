import Cards from './cards2.json';
import './style2.css';

const Cards2 = () => {

    return (
        <div className="card2-container">
            <div className="heading">
                <h3>Collections</h3>
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends</p>
            </div>
            {Cards.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={item.title} className="row2-card" />
                        <div className='img-text'>
                            <p>{item.title}</p>
                            <p>{item.place}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards2;