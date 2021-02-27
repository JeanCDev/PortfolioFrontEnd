import {useState} from 'react';
import api from '../../api';
import { useHistory } from 'react-router-dom';

export default function UserModal(){

  const token = localStorage.getItem('auth-token');
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  async function saveUserInfo(){ 

    if(password !== passwordCheck){
      alert('As senhas devem ser iguais');
    } else {
      await api.post(`login/`, {
        name,
        email,
        password},
        {headers: {
          "auth-token": token
        }
      }).then(response =>{
        
        if(response.data === 'Missing required fields'){
          alert('Faltam campos a serem preenchidos');
          return;
        }

        alert('Usuário inserido com sucesso');
        window.location.reload();

      }).catch(()=>{
        if(token) {
          localStorage.removeItem('auth-token');
        }
  
        history.push('/admin/login');
      });
    }

  }
  
  return(

    <div className="modal fade" id="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Inserir novo usuário</h5>
            <button id="btn-x" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Senha</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Confirme a senha</label>
              <input 
                type="password" 
                id="passwordCheck" 
                name="passwordCheck" 
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}
                className="form-control"/>
            </div>

          </div>
          <div className="modal-footer">
            <button id="btn-close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button id="btn-save" type="button" className="btn btn-primary"
              onClick={saveUserInfo}
            >Salvar</button>
          </div>
        </div>
      </div>
    </div>

  );

}