import {ChangeEvent, useState} from 'react';
import api from '../../api';
import { useHistory } from 'react-router-dom';
import "./ProjectModal.css";

export default function ProjectModal(){

  const token = localStorage.getItem('auth-token');
  const history = useHistory();

  const [name, setName] = useState('Casa da Criança');
  const [description, setDescription] = useState('Descrição descritiva');
  const [link, setLink] = useState('');
  const [image, setImage] = useState<File>();
  const [github, setGithub] = useState('https://github.com/JeanCDev/NextLevelWeek-3');

  async function saveProjectInfo(){ 

    const data = new FormData();
    
    data.append('name', name);
    data.append('description', description);
    data.append('link', link);
    if(image) data.append('image', image);
    data.append('github_url', github);

    await api.post(`projects/`, data,
      {headers: {
        "auth-token": token
      }
    }).then(response =>{ 
      if(response.data === 'Missing required fields'){
        alert('Faltam campos a serem preenchidos');
        return;
      }

      alert('Projeto inserido com sucesso');
      window.location.reload();
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
  
  return(

    <div className="modal fade" id="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Inserir novo projeto</h5>
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

          </div>
          <div className="modal-footer">
            <button id="btn-close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button id="btn-save" type="button" className="btn btn-primary"
              onClick={saveProjectInfo}
            >Salvar</button>
          </div>
        </div>
      </div>
    </div>

  );

}