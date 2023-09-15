import { FunctionComponent, useEffect, useState } from 'react';
import Experience from '../../../models/experience';
import EXPERIENCES from '../../../models/mocked-data/mock-experiences';
import ExperienceItem from './exp-item';

type ExperienceProps = {
    experienceType: string;
}

const ExperiencesPanel: FunctionComponent<ExperienceProps> = ({experienceType}) => {

    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        let jobExperience  = EXPERIENCES.filter((experience) => experience.type === experienceType);
        setExperiences(jobExperience);
    }, [experienceType]);

    return (
            <div className="knowledges-box">
                <h4>_Expériences</h4>
                <div>
                    <div className="exp-list">
                                {experiences.map(experience => (
                                    <ExperienceItem key={experience.id} experience={experience} />
                                ))}
                    </div>
                </div>
            </div>
    );
};

export default ExperiencesPanel;