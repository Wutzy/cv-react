import { FunctionComponent, useState, useEffect } from "react";
import Project from "../../models/project";
import PROJECTS from "../../models/mock-project";
import {useParams} from 'react-router-dom';
import './project-details.css'


const ProjectDetails: FunctionComponent = () => {

    const params = useParams<{ id?: string }>();

    const [project, setProject] = useState<Project|null>(null);

    useEffect(() => {
        PROJECTS.forEach(project => {
          if (params.id === project.id.toString()) {
            setProject(project);
          }
        })
      }, [params.id]);

      return (
        <div>
            { project ? (
                <div>
                    <img src={project.picture} alt={project.name} />
                    <h3>{project.name}</h3>
                    <ul className="project-details-techno">
                        {project.types.map(type => (
                          <li key={type} className='types'>{type}</li>
                        ))}
                    </ul>
                    <p>{project.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, provident!</p>
                </div>

            ) : (
                <h4>Pas de projet trouver.</h4>

            )

            }
        </div>
      )
}

export default ProjectDetails;