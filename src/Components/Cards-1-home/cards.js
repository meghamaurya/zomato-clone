import cardDetail from './cards.json';
import './styles.css';
import LinesEllipsis from 'react-lines-ellipsis'
const Cards1 = () => {

    return (
        <div className="container">
            {cardDetail.map((item) => {
                return (
                    <div key={item.id} className='card'>
                        <img src={item.img} alt={item.title} className="card-img" />
                        <div className='text'>
                            <p className='p1'>{item.title}</p>
                            <LinesEllipsis text={item.description} maxLine='1' ellipsis="..." trimRight basedOn='letters' className='p2' />
                            {/* <p className='p2'>{item.description}</p> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards1;