import { Link } from 'react-router-dom';
import "./Card.css";

type CardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function Card({id, image, title, description}:CardProps){

  return (
    <article className="mb-3 col-12 col-md-6 col-lg-4 col-xl-3">   
      <div className="card">
        <img src={image} alt={title} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-center align-items-center">
            <Link to={`/project/${id}`} className="btn btn-primary">See project</Link>
          </div>
        </div>
      </div>
    </article>
  );

}