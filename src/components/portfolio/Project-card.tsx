import React, { FunctionComponent } from 'react';
import Project from '../../models/project';


type Props = {
    project: Project;
}

const ProjectCard: FunctionComponent<Props> = ({project}) => {

    return (
        <div className='col s4'>
            <h3>{project.name}</h3>
        </div>
    );
};

export default ProjectCard;