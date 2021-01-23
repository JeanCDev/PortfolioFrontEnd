import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import api from '../api';

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

  const [project, setProject] = useState<ProjectInfo>();
  const params = useParams<ProjectParam>();

  useEffect(() => {
    api.get(`projects/${params.id}`).then(response=>{
      setProject(response.data);
      console.log(response.data);
    });

  },[params.id]);

  return (

    <div id="project">
      <div className="container">

        <h1>{project?.projectName}</h1>
        <p>{project?.projectDescription}</p>
        <img src={`${process.env.REACT_APP_API_URL}/${project?.projectImageUrl}`} alt=""/>
        <a href={project?.githubUrl}>Github do projeto</a>
        <a href={project?.projectLink}>Link do projeto</a>
      </div>
    </div>

  );

}