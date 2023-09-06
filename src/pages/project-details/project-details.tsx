import { FunctionComponent, useState, useEffect } from "react";
import Project from "../../models/project";
import PROJECTS from "../../models/mocked-data/mock-projects";
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
                <div className="project-details">
                    <div className="row">
                      <div className="col s12 m7">
                        <img src={project.picture} alt={project.name} className="project-details-img" />
                      </div>
                      <div className="col s12 m5">
                        <h4 className="center">{project.name}</h4>
                        <p className="project-details-description">{project.description}</p>
                        <p>Technologies utilisées: </p>
                        <ul className="project-details-techno">
                          {project.types.map(type => (
                            <li key={type} className='types'>{type}</li>
                          ))}
                        </ul>
                      </div>
                    </div>


                </div>

            ) : (
                <h4>Pas de projet trouver.</h4>

            )

            }
        </div>
      )
}

export default ProjectDetails;