import { Link } from 'react-router-dom';
import JC from '../images/JC.svg';
import './styles/Header.css';

function Header(){

  return(
    <header id="header">
      <nav>
        <Link to='/'>
          <img src={JC} alt="JC logo"/>
        </Link>
        
      </nav>

      <p>Jean Gomes</p>
    </header>
  );

}

export default Header;