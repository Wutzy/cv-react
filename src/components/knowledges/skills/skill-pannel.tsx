import { FunctionComponent } from 'react';
import Skill from '../../../models/skill';
import SkillBar from './skill-bar';

type SkillProps = {
    skills: Skill[];
    title: string;
}

const SkillPannel:FunctionComponent<SkillProps> = ({skills, title}) => {

    return (
        <div>
            <div className='row'>
                <div className='col s12'>
                    <h4>_{title}</h4> 
                </div>        
            </div>
            <div className='skill-box'>
                <div className="row">
                    <div className="col s6 xp1">
                        1 an
                    </div>
                    <div className="col s6 xp2">
                        2 ans
                     </div>
                </div>
                <div className='row'>
                    <div className="col s11">
                        {skills.map(skill => (
                            <SkillBar key={skill.id} skill={skill} /> 
                        ))}
                    </div>        
                </div>
            </div>            
        </div>
    );
};

export default SkillPannel;