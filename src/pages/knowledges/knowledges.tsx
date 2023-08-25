import { FunctionComponent } from 'react';
import SkillPannel from '../../components/knowledges/skills/skill-pannel';
import getSkills from '../../helpers/get-skills';
import './knowledges.css'

const Knowledges: FunctionComponent = () => {

    const LanguageSkills = getSkills('language');
    const ToolsSkills = getSkills('tools');

    return (
        <div>
            <div className="row">
                <div className="col s12 m6 languages">
                    <SkillPannel skills = {LanguageSkills} title='Language'/>
                    <SkillPannel skills = {ToolsSkills} title='Outils'/>   
                </div>
                <div className='col s12 m6 others'>

                </div>
            </div>
            
            
        </div>
    );
};

export default Knowledges;