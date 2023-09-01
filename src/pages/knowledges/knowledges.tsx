import { FunctionComponent } from 'react';
import SkillPannel from '../../components/knowledges/skills/skill-pannel';
import getSkills from '../../helpers/get-skills';
import ExperiencesPannel from '../../components/knowledges/experiences/exp-pannel';
import './knowledges.css'

const Knowledges: FunctionComponent = () => {

    const LanguageSkills = getSkills('language');
    const ToolsSkills = getSkills('tools');

    return (
        <div>
            <div className="row">
                <div className="col s12 m5 languages">
                    <SkillPannel skills = {LanguageSkills} title='Skills'/>
                </div>
                <div className='col s12 m7 experiences'>
                <ExperiencesPannel title='Experiences' experienceType = 'job'/>
                </div>
            </div>  
            <div className="row">
                <div className="col s12 m6 formation">
                    <ExperiencesPannel title='Formation' experienceType = 'formation'/>
                </div>
            </div>             
        </div>
    );
};

export default Knowledges;