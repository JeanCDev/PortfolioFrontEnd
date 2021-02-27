import { Link } from "react-router-dom";
import './Button.css';

type ButtonProps = {
  id: string;
  linkTo: string;
  altImg: string;
  image: string;
  name: string;
}

function Button({id, linkTo, altImg, image, name}: ButtonProps){

  if(linkTo.startsWith('http')){

    return(
      <a className="button" id={id} href={linkTo}>
        <img src={image} alt={altImg}/>
        {name}
      </a>
    );

  } else{

    return(
      <Link className="button" id={id} to={linkTo}>
        <img src={image} alt={altImg}/>
        {name}
      </Link>
    );

  }

}

export default Button;