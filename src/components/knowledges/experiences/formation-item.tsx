import { FunctionComponent } from 'react';
import Experience from '../../../models/experience';
import './exp-item.css';

type ExperienceProps = {
    experience: Experience;
}

const FormationItem: FunctionComponent<ExperienceProps> = ({experience}) => {
    return (
        <div className='exp-item'>
            <span>{experience.date_release.getFullYear()}</span>
            <p className='job-post'>{experience.name_corporation}:</p>
            <p><span>{experience.post_name}</span></p>
        </div>
    );
};

export default FormationItem;