import { useEffect, useState } from "react";
import api from "../api";

import Header from "../components/Header";
import Card from "../components/Card";
import './styles/portfolio.css';
import Loading from "../components/Loading";

interface Project{
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImageUrl: string;
  githubUrl: string;
}

function Portfolio(){

  const [loading, setLoading] = useState(true);
  
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get("projects").then((response)=>{
      setProjects(response.data);
      setLoading(false)
    });
  }, []);

  
  if (loading){
    return <Loading />;
  } 
  
  return (
    <div id="projects">
      <div id="head">
      <Header />
      </div>
      <main>
        <div className="container" id="portfolio-projects">
          <h1 className="projects-title">Meus Projetos</h1>
          <div className="row">
            {projects.map(project =>{
              let description = '';
              if(project.projectDescription.length > 80){
                description = 
                  project.projectDescription.substr(0, 77) + '...'
              } else {
                description = project.projectDescription;
              }

              return (<Card 
                key={project.projectId}
                id={project.projectId}
                image={`${process.env.REACT_APP_API_URL}/${project.projectImageUrl}`} 
                title={project.projectName} 
                description={description}/>
              );
            })}
          </div>
        </div>
      </main>

    </div>

  );
}

export default Portfolio;