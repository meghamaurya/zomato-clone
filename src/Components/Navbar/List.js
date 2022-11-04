import { Link } from "react-router-dom";
const List = ({ children }) => {

    return (
        <>
            <ul className='ul'>
                <li className='li'>
                    <Link to="/" className='link' >{children}</Link>
                </li>
            </ul>
        </>
    )
}
export default List;