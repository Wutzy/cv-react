import { FunctionComponent } from 'react';
import Skill from '../../../models/skill';
import SkillBar from './skill-bar';

type SkillProps = {
    skills: Skill[];
    title: string;
}

const SkillPanel:FunctionComponent<SkillProps> = ({skills, title}) => {

    return (
            <div className='knowledges-box'>
                <h4>_{title}</h4>
                <div className="row">
                    <div className="col s6 xp1">
                        1 an
                    </div>
                    <div className="col s6 xp2">
                        2 ans
                     </div>
                </div>
                <div className='row'>
                    <div className="col s12">
                        {skills
                        .sort(function (a, b) {
                            return b.xp - a.xp;
                        })
                        .map(skill => (
                            <SkillBar key={skill.id} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default SkillPanel;