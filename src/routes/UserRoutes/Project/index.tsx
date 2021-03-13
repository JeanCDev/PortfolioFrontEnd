import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import Header from './../../../components/Header';
import Footer from './../../../components/Footer';
import api from '../../../api';
import './project.css';
import Loading from '../../../components/Loading';

interface ProjectInfo{
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImageUrl: string;
  githubUrl: string;
}

interface ProjectParam{
  id: string;
}

export default function Project(){

  const [loading, setLoading] = useState(true);

  const [project, setProject] = useState<ProjectInfo>();
  const params = useParams<ProjectParam>();
  
  useEffect(() => {
    api.get(`projects/${params.id}`).then(response=>{
      setProject(response.data);
      setLoading(false);
    });
    
  },[params.id]);

  if(loading){
    return <Loading />
  }

  return (

    
    <div id="project">

      <Header/>

      <div className="container">
        <div className="row">
          <h1>{project?.projectName}</h1>

          <p>{project?.projectDescription}</p>

          <img 
            className=""
            src={`${process.env.REACT_APP_API_URL}/${project?.projectImageUrl}`} 
            alt={project?.projectName}/>

          <div className="d-flex mt-5 justify-content-center row">
            <a 
              href={project?.githubUrl}
              className="btn btn-primary col-4">Github do projeto</a>
            {project?.projectLink ?
               <a 
               href={project?.projectLink}
               className="btn btn-info d-flex align-items-center col-4 offset-1 justify-content-center">
                 Link do projeto</a> :
               '' 
            }
          </div>
        </div>
        
      </div>
      <div className="before-footer"></div>
      <Footer/>

    </div>

  );

}