
import {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';

export default function AdminLogin(){

    let history = useHistory();

    const [email, setEmail] = useState('paulaas5@gmaicom.uk');
    const [password, setPassword] = useState('123456');

    async function handleSubmit(event: FormEvent){

      const loginFailureMessage = 'Email or password incorrect!'

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
      
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Vai</button>
      </form>
    </div>
    
  );

}