import { FunctionComponent } from 'react';
import SkillPanel from '../../components/knowledges/skills/skill-panel';
import getSkills from '../../helpers/get-skills';
import ExperiencesPanel from '../../components/knowledges/experiences/exp-panel';
import FormationsPanel from '../../components/knowledges/formations/formation-panel';
import SoftSkillsPanel from '../../components/knowledges/softSkills/softSkills-panel';
import './knowledges.css';


const Knowledges: FunctionComponent = () => {

    const LanguageSkills = getSkills('language');

    return (
        <div>
            <div className="row knowledges">
                <div className="col s12 m5 languages">
                    <SkillPanel skills = {LanguageSkills} title='Skills'/>
                </div>
                <div className='col s12 m7 experiences'>
                    <ExperiencesPanel  experienceType = 'job'/>
                </div>
            </div>
            <div className="row knowledges">
                <div className="col s12 m5 formation">
                    <FormationsPanel experienceType = 'formation'/>
                </div>
            </div>
            <div className="row knowledges">
                <div className="col s12 m5 formation">
                    
                </div>
            </div>
        </div>
    );
};

export default Knowledges;