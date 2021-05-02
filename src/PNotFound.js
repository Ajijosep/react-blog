import {Link} from 'react-router-dom'
const PNotFound = () => {
    return ( 
        <div className="pnotfound">
            <h2>Oops, that page was not found!</h2>
            <Link to="/">Go back to Homepage</Link>
        </div>

     );
}
 
export default PNotFound;