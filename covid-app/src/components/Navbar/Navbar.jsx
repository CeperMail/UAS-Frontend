import StyledNavbar from './Navbar.styled';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <h1>Covid ID</h1>
                <ul>
                    <li>
                        <Link to="/">Global</Link>
                    </li>
                    <li>
                        <Link to="/indonesia">Indonesia</Link>
                    </li>
                    <li>
                        <Link to="/provinsi">Provinsi</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </StyledNavbar>
    );
}

export default Navbar;
