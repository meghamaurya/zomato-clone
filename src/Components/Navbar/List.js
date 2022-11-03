import { Link } from "react-router-dom";
const List = ({ Children }) => {

    return (
        <div>
            <ul className='ul'>
                <li className='li'>
                    <Link to="/" className='link'>{Children}</Link>
                </li>
            </ul>
        </div>
    )
}
export default List;