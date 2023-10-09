import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

    function handleLogout() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <span>Welcome, { user.username }</span>
            &nbsp; | &nbsp;
            <Link to="/signedin">Signed In Page</Link>
            &nbsp; | &nbsp;
            <Link to="/newdata">New Data Page</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={ handleLogout }>Log Out</Link>
        </nav>
    )
}