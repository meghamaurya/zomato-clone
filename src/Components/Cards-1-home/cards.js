import cardDetail from './cards.json';
import './styles.css';
const Cards1 = () => {

    return (
        <div className="container">
            {cardDetail.map((item) => {
                return (
                    <div key={item.id} className='card'>
                        <img src={item.img} alt={item.title} className="card-img" />
                        <div className='text'>
                            <p className='p1'>{item.title}</p>
                            <p className='p2'>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards1;