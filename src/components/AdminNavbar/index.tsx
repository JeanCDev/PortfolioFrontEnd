import { useLocation, Link } from 'react-router-dom';
import JC from '../../images/JC.svg';
import './AdminNavbar.css';

export default function AdminNavbar(){

  let location = useLocation();

  return (
    <nav id="admin-navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            <img src={JC} alt="JC logo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={location.pathname.includes('/admin/users') ? 'nav-link active' : 'nav-link'} aria-current="page" to="/admin/users">Usuários</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname.includes('/admin/projects') ? 'nav-link active' : 'nav-link'} to="/admin/projects">Projetos</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname.includes('/admin/messages') ? 'nav-link active' : 'nav-link'} to="/admin/messages">Mensagens</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" aria-disabled="true">Assuntos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );

}