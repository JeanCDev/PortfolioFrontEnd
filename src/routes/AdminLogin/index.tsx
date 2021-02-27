
import {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import JC from '../../images/JC.svg';
import './login.css';

export default function AdminLogin(){

    let history = useHistory();
    let token = localStorage.getItem('auth-token');

    if(token) {
      history.push('/admin');
    }

    const [email, setEmail] = useState('paulaas5@gmaicom.uk');
    const [password, setPassword] = useState('123456');

    async function handleSubmit(event: FormEvent){

      const loginFailureMessage = 'Email or password incorrect!';

      event.preventDefault();

      await api.post('login-validation', {
        password,
        email,
      }).then((response =>{
        
        if(response.data === loginFailureMessage){
          alert('Email ou senha inválidos');
        } else{
          localStorage.setItem('auth-token', response.data);
          history.push('/admin');
        }

      }));

  }

  return(
      
    <div id="login">
      <div id="login-block">
        <img src={JC} alt="JC logo"/>
        <h1>Entra no painel administrativo</h1>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="form-control"/>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="form-control"/>
          <button 
            type="submit"
            className="btn btn-primary"
            >Login</button>
        </form>
      </div>
    </div>
    
  );

}