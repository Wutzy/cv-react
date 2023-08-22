import React, { FunctionComponent } from 'react';
import Project from '../../models/project';
import './project-card.css'
import { useNavigate } from 'react-router-dom';


type Props = {
    project: Project;
}

const ProjectCard: FunctionComponent<Props> = ({project}) => {

    const navigate = useNavigate();

    const goToProject = (id: number) => {
        navigate(`/portfolio/${id}`);
      }

    return (
        <div className='col s12 m4' onClick={() => goToProject(project.id)}>
                <div className='card'>
                    <div className='card-title'>{project.name}</div>
                    <div className='card-img'>
                        <img src={project.picture} alt={project.name} />
                    </div>
                    <div className='card-stacked'>
                        <div className='card-content'>
                            <ul>
                                {project.types.map(type => (
                                    <li key={type} className='types'>{type}</li>
                                ))}
                            </ul>
                        </div>    
                    </div>
                </div>
        </div>
    );
};

export default ProjectCard;