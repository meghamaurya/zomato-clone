import { Link } from "react-router-dom";

const List = ({ children }) => {
    return (
        <Link to="/" className='link' >{children}</Link>
    )
}
export default List;