import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../api';
import AdminNavbar from '../../../components/AdminNavbar';
import Loading from '../../../components/Loading';
import ProjectModal from '../../../components/ProjectModal';

interface ProjectInfo{
  projectId: number,
  projectName: string,
  projectDescription: string,
  projectLink: string,
  projectImageUrl: string,
  githubUrl: string
}

export default function Projects(){

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  let token = localStorage.getItem('auth-token');
  
  useEffect(() => {
    api.get("projects", {
      headers: {
        "auth-token": token
      }
    }).then((response)=>{
      setProjects(response.data);
      setLoading(false);
    }).catch(()=>{
      if(token) {
        localStorage.removeItem('auth-token');
      }

      history.push('/admin/login');
    });
  }, [token, history]);

  if(loading){
    return <Loading />
  } 

  return (
    <div id="admin-projects">
      <AdminNavbar />

      <div className="container mt-3">
        <button 
          className="btn btn-success"
          data-bs-toggle="modal" 
          data-bs-target="#modal">
        Adicionar projeto</button>
      </div>

      <div className="container mt-2">
        <table className="table table-hover table-striped"> 
          <thead className="table-dark">
            <tr className='text-center'>
              <th>id</th>
              <th>Nome</th>
              <th>Link</th>
              <th>Github</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>

            {projects.map(project=>{

              let description = '';
              if(project.projectDescription.length > 30){
                description = 
                  project.projectDescription.substr(0, 27) + '...'
              } else {
                description = project.projectDescription;
              }

              return(
                <tr key={project.projectId} className='text-center'>
                  <td>{project.projectId}</td>
                  <td>{project.projectName}</td>
                  <td>{project.projectLink}</td>
                  <td>{project.githubUrl}</td>
                  <td>{description}</td>
                  <td>
                    <Link 
                      type="button" 
                      to={`/admin/projects/${project.projectId}`}
                      className="btn btn-primary">
                        Editar
                    </Link>
                    <button className="ms-1 btn btn-danger" onClick={
                      ()=>{
                        let result = window.confirm('Deseja realmente excluir o projeto?');

                        if(result) {
                          api.delete(`/projects/${project.projectId}`,{headers: {
                            'auth-token':token
                          }}).then(response =>{
                            if(response.data === 'Project not found'){
                              alert('Usuário não encontrado');
                              return;
                            }
                            alert('Projeto excluído com sucesso');
                            window.location.reload();
                          }).catch(()=>{
                            console.log('Ocorreu um erro');
                          });
                        }
                      }
                    }>X</button>
                  </td>
                </tr>
            )})
          }
          </tbody>
        </table>
      </div>
      
      <ProjectModal />

    </div>
  );

}