import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';

interface UserInfo{
  userId: string,
  userName: string,
  userPassword: string,
  userEmail: string
}

export default function AdminLogin(){

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
      })).catch(error=>{
        console.log(error);
        history.push('/admin/login');
      });

    },[]);

  return(
      
    <div className="d-flex justify-content-center align-items-center">
      {users.map(user =>{
        return (<div key={user.userId}>
          <p>{user.userName}</p>
          <p>{user.userEmail}</p>
          {/* <p>{user.userPassword}</p> */}
        </div>)
      })}
    </div>
    
  );

}