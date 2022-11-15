import { Link } from "react-router-dom";

const List = (props) => {
    return (
        <Link to={props.link} className='link' >{props.title}</Link>
    )
}
export default List;