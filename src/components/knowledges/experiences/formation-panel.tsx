import { FunctionComponent, useEffect, useState } from 'react';
import Experience from '../../../models/experience';
import EXPERIENCES from '../../../models/mocked-data/mock-experiences';
import FormationItem from './formation-item';

type ExperienceProps = {
    experienceType: string;
}

const FormationsPanel: FunctionComponent<ExperienceProps> = ({experienceType}) => {

    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        let jobExperience  = EXPERIENCES.filter((experience) => experience.type === experienceType);
        setExperiences(jobExperience);
    }, [experienceType]);

    return (
            <div className="knowledges-box">
                <h4>_Formations</h4>
                <div className="row">
                    <div className="col s12 exp-list">
                                {experiences.map(experience => (
                                    <FormationItem key={experience.id} experience={experience} />
                                ))}
                    </div>
                </div>
            </div>
    );
};

export default FormationsPanel;