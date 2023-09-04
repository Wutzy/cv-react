import { FunctionComponent, useEffect, useState } from 'react';
import Experience from '../../../models/experience';
import EXPERIENCES from '../../../models/mocked-data/mock-experiences';
import ExperienceItem from './exp-item';

type ExperienceProps = {
    experienceType: string;
    title: string;
}

const ExperiencesPanel: FunctionComponent<ExperienceProps> = ({experienceType, title}) => {

    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        let jobExperience  = EXPERIENCES.filter((experience) => experience.type === experienceType);
        setExperiences(jobExperience);
    }, [experienceType]);

    return (
        <div>
            <div className="exp-box">
                <h4>_{title}</h4>
                <div className="row">
                    <div className="col s12 exp-list">
                                {experiences.map(experience => (
                                    <ExperienceItem key={experience.id} experience={experience} />
                                ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExperiencesPanel;