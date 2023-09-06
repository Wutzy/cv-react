import { FunctionComponent } from 'react';
import Project from '../../models/project';
import './project-card.css'
import { Link } from 'react-router-dom';


type Props = {
    project: Project;
}

const ProjectCard: FunctionComponent<Props> = ({project}) => {

    return (
        <div className='col s12 m4'>
            <Link to={`/portfolio/${project.id}`}>

                <div className='card'>
                    <div className='card-background' style={{backgroundImage: `url(${project.picture})`}}>
                    </div>
                    <div className='card-title'>{project.name}</div>
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