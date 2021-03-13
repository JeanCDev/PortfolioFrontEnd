import React, { useState, useEffect, FormEvent, ChangeEvent} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../api';
import AdminNavbar from '../../../components/AdminNavbar';
import Loading from '../../../components/Loading';
import './ProjectUpdate.css';

interface ProjectParam{id: string}

export default function ProjectUpdate(){

  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const params = useParams<ProjectParam>();

  let token = localStorage.getItem('auth-token');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState<File>();
  const [currentImage, setCurrentImage] = useState('');
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
        setLink(response.data.projectLink);
        setGithub(response.data.githubUrl);
        setCurrentImage(`${process.env.REACT_APP_API_URL}${response.data.projectImageUrl}`);
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

  async function handleProjectEdit(event: FormEvent){ 

    event.preventDefault();

    const data = new FormData();
    
    data.append('name', name);
    data.append('description', description);
    data.append('link', link);
    if(image) data.append('image', image);
    data.append('github_url', github);

    await api.put(`projects/${params.id}`, data,
      {headers: {
        "auth-token": token
      }
    }).then(response =>{ 
      if(response.data === 'Missing required fields'){
        alert('Faltam campos a serem preenchidos');
        return;
      }

      alert('Projeto atualizado com sucesso');
      history.push('/admin/projects');
    }).catch((e)=>{
      if(token) {
        localStorage.removeItem('auth-token');
      }

      history.push('/admin/login');
    });

  }

  function handleImage(event: ChangeEvent<HTMLInputElement>){
    if(!event.target.files){
      return;
    }
    setImage(event.target.files[0]);
  }

  return (
    <div id="admin-project">
      <AdminNavbar />

      <div className="container mt-5 mb-5" id="project-update">
        <div className="row">
          <h1 className="text-center display-4">Imagem Atual do projeto</h1>
          <div className="d-flex justify-content-center ">
            <img src={currentImage} alt={name} className="img-fluid img-thumbnail"/>
          </div>
        </div>
        <form onSubmit={handleProjectEdit} method="post" className="row" >
          
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
              <label htmlFor="githubUrl">Link do Github</label>
              <input 
                type="link" 
                id="githubUrl" 
                name="githubUrl" 
                value={github}
                onChange={e => setGithub(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="link">Link do projeto</label>
              <input 
                type="link" 
                id="link" 
                name="link" 
                value={link}
                onChange={e => setLink(e.target.value)}
                className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="image">Imagem do projeto</label>
              <input 
                type="file" 
                id="image" 
                name="image" 
                onChange={handleImage}
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