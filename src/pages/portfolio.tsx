import React, { FunctionComponent, useState, useEffect } from 'react';
import ProjectCard from '../components/portfolio/Project-card';
import Project from '../models/project';
import PROJECTS from '../models/mock-project';

const Portfolio: FunctionComponent = () => {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        setProjects(PROJECTS);
    }, [])
    return (
        <div>
            <h2 className='center'>
                Mes projets
            </h2>
            <div className='row'>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
        </div>
    );
};

export default Portfolio;