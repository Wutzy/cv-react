import { FunctionComponent } from 'react';
import Experience from '../../../models/experience';
import getDuration from '../../../helpers/get-duration';
import formatDate from '../../../helpers/format-date';
import './exp-item.css';

type ExperienceProps = {
    experience: Experience;
}

const ExperienceItem: FunctionComponent<ExperienceProps> = ({experience}) => {
    return (
        <div>
            <p>{experience.name_corporation}: <span className='job-post'>{experience.post_name}</span></p>                        
            <span>De { formatDate(experience.date_entry) +' à ' +  formatDate(experience.date_release)}</span> 
            <span>({getDuration(experience.date_release, experience.date_entry)} mois)</span>        
        </div>
    );
};

export default ExperienceItem;