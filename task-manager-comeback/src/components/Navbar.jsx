import { Link } from "react-router-dom";

function Navbar() {
    return(
       <nav>
        <h2>Smart TAsk Manager</h2>

        <div>
            <Link to="/">HOME</Link>
            <Link to="/">TASKS</Link>
            <Link to="/">ABOUT</Link>
        </div>
       </nav>
    );
}

export default Navbar;