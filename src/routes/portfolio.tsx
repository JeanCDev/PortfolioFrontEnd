import { useEffect, useState } from "react";
import api from "../api";

interface Project{
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImageUrl: string;
  githubUrl: string;
}

function Portfolio(){

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

    api.get("projects").then((response)=>{

      setProjects(response.data);
    
    });

  }, []);

  return (

    <div>
      {projects.map(project =>{
        return (
          <div key={project.projectId}>
            <p>{project.projectName}</p>
            <img src={`${process.env.REACT_APP_API_URL}/${project.projectImageUrl}`} alt=""/>
          </div>
        );
      })}
    </div>

  );

}

export default Portfolio;