import { FunctionComponent, useEffect, useState } from 'react';
import Experience from '../../../models/experience';
import EXPERIENCES from '../../../models/mocked-data/mock-experiences';
import ExperienceItem from './exp-item';

type ExperienceProps = {
    experienceType: string;
    title: string;
}

const ExperiencesPannel: FunctionComponent<ExperienceProps> = ({experienceType, title}) => {

    const [experiences, setExepriences] = useState<Experience[]>([]);

    useEffect(() => {
        let jobExperience  = EXPERIENCES.filter((experience) => experience.type === experienceType);
        setExepriences(jobExperience);
    }, [experienceType]);

    return (
        <div>
            <div className="row">
                <div className='col s12'>
                        <h4>_{title}</h4> 
                </div>    
            </div>
            <div className="exp-box"> 
                <div className="row">
                    <div className="col s11 exp-list">
                                {experiences.map(experience => (
                                <div className='exp-item'>
                                    <ExperienceItem experience = {experience} />
                                </div>
                                ))}
                    </div>
                </div>             
            </div>

        </div>
    );
};

export default ExperiencesPannel;