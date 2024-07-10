import { Link } from 'react-router-dom';
import StyledFooter from './Footer.styled';

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div className="brand">
          <h1>Covid ID</h1>
          <p>Copyright &copy; Muhammad Arifin Ilham 2024</p>
        </div>
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
      </footer>
    </StyledFooter>
  );
}

export default Footer;
