import JC from '../images/JC.svg';
import './styles/Header.css';

function Header(){

  return(
    <header id="header">
      <nav>
        <img src={JC} alt=""/>
      </nav>

      <p>Jean Gomes</p>
    </header>
  );

}

export default Header;