import { FunctionComponent } from 'react';
import Experience from '../../../models/experience';
import getDuration from '../../../helpers/get-duration';

type ExperienceProps = {
    experience: Experience;
}

const ExperienceItem: FunctionComponent<ExperienceProps> = ({experience}) => {
    return (
        <div>
            <p>{experience.name_corporation}</p>
            <p>{experience.post_name}</p>            
            <p>{experience.date_entry.getDay()}</p> 
            <p>{experience.date_release.getTime()}</p>
            <p>{getDuration(experience.date_release, experience.date_entry)/(1000 * 3600 * 24)}</p>
            
        </div>
    );
};

export default ExperienceItem;