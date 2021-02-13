import { useState, useEffect } from 'react';
import api from '../api';
import AdminNavbar from '../components/AdminNavbar';
import Loading from '../components/Loading';
import UserModal from '../components/UserModal';

interface UserInfo{
  userId: number,
  userName: string,
  userEmail: string
  userPassword: string
}

export default function Users(){

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
    });
  }, []);

  let selectedUser = {
    userId: 1,
    userName: 'J',
    userEmail: 'd',
    userPassword: ''
  }

  function setSelectedUserInfo(user: UserInfo){
    selectedUser.userId = user.userId;
    selectedUser.userName = user.userName;
    selectedUser.userEmail = user.userEmail;
    selectedUser.userPassword = user.userPassword;
  }

  //const [selectedUser, setSelectedUser] = useState<UserInfo>(defaultUser);

  if(loading){
    return <Loading />
  } 

  return (
    <div id="admin-users">
      <AdminNavbar />

      <div className="container mt-5">
        <table className="table table-hover table-striped"> 
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>

            {users.map(user=>{
              return(
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>
                    <button 
                      type="button" 
                      onClick={() => {
                        setSelectedUserInfo(user)
                        console.log(selectedUser)
                      }}
                      className="btn btn-primary" 
                      data-bs-toggle="modal" 
                      data-bs-target="#modal">
                        Editar
                    </button>
                  </td>
                </tr>
            )})
          }
          </tbody>
        </table>
      </div>
        
      <UserModal 
        userId={selectedUser.userId}
        userName={selectedUser.userName}
        userEmail={selectedUser.userEmail}
        userPassword={selectedUser.userPassword}
      />

    </div>
  );

}