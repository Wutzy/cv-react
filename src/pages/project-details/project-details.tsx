import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
              <div className="row project-details">
                <div className="col s12 m6 imgProject">
                  <img src={project.picture} alt="" />
                </div>
                <div className="col m6 descriptionProject">
                  <h4 className="project-title">{project.name}</h4>
                  <p className="project-links"><Link to={project.ghPages} target="_blank">Site</Link> - <Link to={project.ghPages}>Github</Link></p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    <p>Technologies utilisées:</p>
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