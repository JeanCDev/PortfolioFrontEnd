import {useState} from 'react';
import api from '../api';

type UserInfo = {
  userId: number;
  userName: string;
  userEmail: string;
  userPassword: string;
}

export default function UserModal({
  userId, userName, userEmail, userPassword}: UserInfo){

  const token = localStorage.getItem('auth-token');

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  async function updateUserInfo(){
    
    await api.put(`login/${userId}`, {
      name,
      email,
      password: userPassword,
      headers: {
        "auth-token": token
      }
    }).then(response =>{
      console.log(response);
    });

  }
  
  return(

    <div className="modal fade" id="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button id="btn-x" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" value={name}
            onChange={e => setName(e.target.value)}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email}
            onChange={e => setEmail(e.target.value)}/>

          </div>
          <div className="modal-footer">
            <button id="btn-close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button id="btn-save" type="button" className="btn btn-primary"
              data-bs-dismiss="modal"
              onSubmit={updateUserInfo}
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>

  );

}