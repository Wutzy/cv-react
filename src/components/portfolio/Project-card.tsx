import React, { FunctionComponent } from 'react';
import Project from '../../models/project';
import './Project-card.css'
import { Link } from 'react-router-dom';


type Props = {
    project: Project;
}

const ProjectCard: FunctionComponent<Props> = ({project}) => {

    return (
        <div className='col s4'>
            <Link to='/'>
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
            </Link>
        </div>
    );
};

export default ProjectCard;