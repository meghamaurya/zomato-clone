import cardDetail from './cards.json';
import './styles.css';
const Cards = () => {

    return (
        <div className="container">
            {cardDetail.map((item) => {
                return (
                    <div key={item.id} className='card'>
                        <img src={item.img} alt={item.title} />
                        <div className='text'>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards;