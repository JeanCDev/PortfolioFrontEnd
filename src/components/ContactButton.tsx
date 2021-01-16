import { Link } from 'react-router-dom';
import Contact from '../images/Contact.svg';
import './styles/ContactButton.css';

export default function ContactButton(){

  return (
    <Link to="/contact" id="contact-button">
      <img src={Contact} className="img-fluid" alt="Contact Button"/>
    </Link>
  );

}