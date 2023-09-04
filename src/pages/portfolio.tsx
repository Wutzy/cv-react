import { FunctionComponent, useState, useEffect } from 'react';
import ProjectCard from '../components/portfolio/project-card';
import Project from '../models/project';
import PROJECTS from '../models/mocked-data/mock-projects';

const Portfolio: FunctionComponent = () => {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        setProjects(PROJECTS);
    }, [])
    return (
        <div>
            <div className='row'>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
        </div>
    );
};

export default Portfolio;