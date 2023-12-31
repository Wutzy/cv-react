import { FunctionComponent } from 'react';
import Experience from '../../../models/experience';
import getDuration from '../../../helpers/get-duration';
import formatDate from '../../../helpers/format-date';
import '../experiences/exp-item.css';

type ExperienceProps = {
    experience: Experience;
}

const ExperienceItem: FunctionComponent<ExperienceProps> = ({experience}) => {
    return (
        <div className='exp-item'>
            <p>{experience.name_corporation}: <span className='job-post'>{experience.post_name}</span></p>
            <p>{experience.description}</p>
            <span className='date_color'>De { formatDate(experience.date_entry) +' à ' +  formatDate(experience.date_release) + ' '}</span>
            <span>({getDuration(experience.date_release, experience.date_entry)} mois)</span>
        </div>
    );
};

export default ExperienceItem;