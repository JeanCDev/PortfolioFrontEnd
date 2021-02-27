import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../api';
import AdminNavbar from '../../components/AdminNavbar';
import Loading from '../../components/Loading';

interface UserParam{id: string}

export default function Users(){

  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const params = useParams<UserParam>();

  let token = localStorage.getItem('auth-token');

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[passwordCheck, setPasswordCheck] = useState('');

  useEffect(() => {
    api.get(`login/${params.id}`, {
      headers: {
        "auth-token": token
      }
    }).then((response)=>{
      
      if(response.data === "User not found") history.push("/admin/users")

      else {
        setName(response.data.userName);
        setEmail(response.data.userEmail);
      }

      setLoading(false);
    }).catch(()=>{
      if(token) {
        localStorage.removeItem('auth-token');
      }

      history.push('/admin/login');
    });
  }, [token, history, params]);


  if(loading){
    return <Loading />
  } 

  async function handleUserEdit(event: FormEvent){
    event.preventDefault();

    //let nullable = (param: any)=> param === '' || param === null || param === undefined ? true : false;

    //if(nullable(password) && nullable(passwordCheck) && user) setPassword(user.userPassword);

    if(password !== passwordCheck){
      alert('As senhas devem ser iguais');
    } else {
      await api.put(`login/${params.id}`, {name, email, password}, {
        headers: {
          "auth-token": token,
          'Content-Type': 'application/json'
        }
      }).then(() => {
        alert('Usuário atualizado com sucesso!');
        history.push('/admin/users');
      }).catch(()=>alert('Ocorreu um erro'));
    }

  }

  return (
    <div id="admin-user">
      <AdminNavbar />

      <div className="container mt-5">
        
        <form onSubmit={handleUserEdit} method="post" className="row" >
          
          <div className="form-group col-md-6 offset-md-3">
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Nome do usuário" 
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}/>
          </div>

          <div className="form-group mt-2 col-md-6 offset-md-3">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email do usuário" 
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
          </div>

          <div className="form-group mt-2 col-md-6 offset-md-3">
            <label htmlFor="">Trocar Senha</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Digite a nova senha" 
              className="form-control"
              value={password}
              onChange={e =>setPassword(e.target.value)}/>

            <input 
              type="password" 
              name="passwordCheck" 
              id="passwordCheck" 
              placeholder="Digite novamente a nova senha" 
              className="form-control mt-2"
              value={passwordCheck}
              onChange={e => setPasswordCheck(e.target.value)}/>
          </div>

          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary">Salvar</button>
          </div>

        </form>

      </div>

    </div>
  );

}