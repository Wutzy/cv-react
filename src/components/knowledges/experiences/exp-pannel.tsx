import { FunctionComponent, useEffect, useState } from 'react';
import Experience from '../../../models/experience';
import EXPERIENCES from '../../../models/mocked-data/mock-experiences';
import ExperienceItem from './exp-item';



const ExperiencesPannel: FunctionComponent = () => {

    const [experiences, setExepriences] = useState<Experience[]>([]);

    useEffect(() => {
        setExepriences(EXPERIENCES);
    }, []);

    return (
        <div>
            {experiences.map(experience => (
                <div>
                    <ExperienceItem experience = {experience} />
                </div>

            ))}
        </div>
    );
};

export default ExperiencesPannel;