import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../api';
import AdminNavbar from '../../../components/AdminNavbar';
import Loading from '../../../components/Loading';
import UserModal from '../../../components/UserModal';

interface UserInfo{
  userId: number,
  userName: string,
  userEmail: string
  userPassword: string
}

export default function Users(){

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserInfo[]>([]);
  let token = localStorage.getItem('auth-token');

  useEffect(() => {
    api.get("login", {
      headers: {
        "auth-token": token
      }
    }).then((response)=>{
      setUsers(response.data);
      setLoading(false);
    }).catch(()=>{
      if(token) {
        localStorage.removeItem('auth-token');
      }

      history.push('/admin/login');
    });
  }, [token, history]);

  if(loading){
    return <Loading />
  } 

  return (
    <div id="admin-users">
      <AdminNavbar />

      <div className="container mt-3">
        <button 
          className="btn btn-success"
          data-bs-toggle="modal" 
          data-bs-target="#modal">
        Adicionar usuário</button>
      </div>

      <div className="container mt-2">
        <table className="table table-hover table-striped"> 
          <thead className="table-dark">
            <tr className='text-center'>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>

            {users.map(user=>{
              return(
                <tr key={user.userId} className='text-center'>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>
                    <Link 
                      type="button" 
                      to={`/admin/users/${user.userId}`}
                      className="btn btn-primary">
                        Editar
                    </Link>
                    <button className="ms-1 btn btn-danger" onClick={
                      ()=>{
                        let result = window.confirm('Deseja realmente excluir o usuário');

                        if(result) {
                          api.delete(`/login/${user.userId}`,{headers: {
                            'auth-token':token
                          }}).then(response =>{
                            if(response.data === 'User not found'){
                              alert('Usuário não encontrado');
                              return;
                            }
                            alert('Usuário excluído com sucesso');
                            window.location.reload();
                          }).catch(()=>{
                            console.log('Ocorreu um erro');
                          });
                        }
                      }
                    }>X</button>
                  </td>
                </tr>
            )})
          }
          </tbody>
        </table>
      </div>
      
      <UserModal />

    </div>
  );

}