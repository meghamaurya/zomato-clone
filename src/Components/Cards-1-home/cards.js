import cardDetail from './cards.json';
import './styles.css';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)


const Cards1 = () => {

    return (
        <div className="container">
            {cardDetail.map((item) => {
                return (
                    <div key={item.id} className='card'>
                        <img src={item.img} alt={item.title} className="card-img" />
                        <div className='text'>
                            <span className='p1'>{item.title}</span>
                            <span className='p2'><ResponsiveEllipsis text={item.description} maxLine='1' ellipsis="..." trimRight basedOn='letters' /></span>
                            {/* <p className='p2'>{item.description}</p> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards1;