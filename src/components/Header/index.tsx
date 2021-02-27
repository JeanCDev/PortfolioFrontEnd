import { Link, useLocation } from 'react-router-dom';
import JC from '../../images/JC.svg';
import './Header.css';

function Header(){

  let location = useLocation();

  console.log(location.pathname);

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