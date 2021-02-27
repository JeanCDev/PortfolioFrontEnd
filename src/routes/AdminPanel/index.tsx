import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import AdminCard from '../../components/AdminCard';
import AdminNavbar from '../../components/AdminNavbar';
import Loading from '../../components/Loading';
import './adminPanel.css';

interface UserInfo{
  userId: string,
  userName: string,
  userPassword: string,
  userEmail: string
}

export default function AdminLogin(){

    const [loading, setLoading] = useState(true);

    const [users, setUsers] = useState<UserInfo[]>([]);
    let history = useHistory();
    let token = localStorage.getItem('auth-token');

    useEffect(() => {

      api.get('/login', {
        headers: {
          "auth-token": token
        }
      }).then((response =>{
        setUsers(response.data);
        setLoading(false);
      })).catch(()=>{
        if(token) {
          localStorage.removeItem('auth-token');
        }

        history.push('/admin/login');
      });

    },[token, history]);
  
  if(loading){
    return <Loading />
  }

  return(
    <div id="control-panel">
      
      <AdminNavbar />
      
      <main className="mt-5">
        <section>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 ">
                <AdminCard 
                  title="Usuários Cadastrados"
                  information={users.length}
                />
              </div>
              <div className="d-flex justify-content-center col-12 col-md-6">
              <AdminCard 
                  title="Projetos Cadastrados"
                  information={0}
                />
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 ">
              <AdminCard 
                  title="Mensagens recebidas"
                  information={0}
                />
              </div>
              <div className="d-flex justify-content-center col-12 col-md-6">
                <AdminCard 
                  title="Assuntos Cadastrados"
                  information={0}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  );

}