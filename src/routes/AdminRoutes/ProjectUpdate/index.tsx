import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../api';
import AdminNavbar from '../../../components/AdminNavbar';
import Loading from '../../../components/Loading';

interface ProjectParam{id: string}

export default function ProjectUpdate(){

  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const params = useParams<ProjectParam>();

  let token = localStorage.getItem('auth-token');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  //const [image, setImage] = useState<File>();
  const [github, setGithub] = useState('');

  useEffect(() => {
    api.get(`projects/${params.id}`, {
      headers: {
        "auth-token": token
      }
    }).then((response)=>{
      
      if(response.data === "Project not found") history.push("/admin/projects");

      else {
        setName(response.data.projectName);
        setDescription(response.data.projectDescription);
        setLink(response.data.projectDescription);
        setGithub(response.data.projectDescription);
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

    /* if(password !== passwordCheck){
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
    } */

  }

  return (
    <div id="admin-project">
      <AdminNavbar />

      <div className="container mt-5">
        
        <form onSubmit={handleUserEdit} method="post" className="row" >
          
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
              <label htmlFor="email">Link do Github</label>
              <input 
                type="link" 
                id="githubUrl" 
                name="githubUrl" 
                value={github}
                onChange={e => setGithub(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Link do projeto</label>
              <input 
                type="link" 
                id="link" 
                name="link" 
                value={link}
                onChange={e => setLink(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Imagem do projeto</label>
              <input 
                type="file" 
                id="image" 
                name="image" 
                //value={image}
                //onChange={e => setImage(e.target.files)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Descrição do projeto</label>
              <textarea 
                id="description" 
                name="description" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="form-control"/>
            </div>

          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary">Salvar</button>
          </div>

        </form>

      </div>

    </div>
  );

}